$(function(){
	$(".orders").css("height","80px");
	if(sessionStorage.getItem("userinfo") == null || sessionStorage.getItem("userinfo") ==""){
		alert("您还未登录，请登录后查看详细信息！");
	}else{		
//		var uid = JSON.parse(sessionStorage.getItem("userinfo")).id;
		//插入电影票信息
		$.ajax({
			type:"get",
			url:"http://localhost:8080/collection?uid="+uid,
			async:true,
			success:function(data){
				$("#moviesinfo").tmpl(data).appendTo(".orderinfo");
			}
		});
		//插入影城卡信息
		$.ajax({
			type:"get",
			url:"http://localhost:8080/querycards?uid="+uid,
			async:true,
			success:function(data){
				$("#cardinfo").tmpl(data).appendTo(".orderinfo");
			}
		});
		//插入会员卡信息
		$.ajax({
			type:"get",
			url:"http://localhost:8080/queryvip?uid="+uid,
			async:true,
			success:function(data){
				$("#vipinfo").tmpl(data).appendTo(".orderinfo");
			}
		});
		//插入资源信息
		$.ajax({
			type:"get",
			url:"http://localhost:8080/queryshop?uid="+uid,
			async:true,
			success:function(data){
				$("#shopinfo").tmpl(data).appendTo(".orderinfo");
			}
		});
	}
	
	
	//加载个人信息
	$.ajax({
		type:"get",
		url:"http://localhost:8080/users/userinfo?uid="+uid,
		async:true,
		success:function(data){
			$("#userinfo").tmpl(data).appendTo(".header");
			//随机换肤
			var rand = Math.floor(Math.random()*6+1); 
			var new_src = "imgs/user/bg" + rand +".jpg";
			$("#bg").prop("src",new_src);
		}
	});
	
	//加载收藏信息
	var collsinfo = getCache("collsinfo");
	if(collsinfo != null && collsinfo != ""){
		$("#collinfo").tmpl(collsinfo).appendTo(".collection");
	}
	
});


//读取缓存函数
var getCache = function(obj){
	var userObj = JSON.parse(sessionStorage.getItem("userinfo"));
	if(window.localStorage){
		if(localStorage.getItem(obj) != null){
			var ticketObj = JSON.parse(localStorage.getItem(obj));
			var newObj = ticketObj.filter(function(item, index){
				return item.uid == userObj.id;
			});
			return newObj;
		};
	};
};





var uid = JSON.parse(sessionStorage.getItem("userinfo")).id;
var acc = JSON.parse(sessionStorage.getItem("userinfo")).acc;
//弹出修改框
$(".header").on("click","#modify",function(){
	$(".info").slideDown(300);
});

//关闭修改框
$(".header").on("click","#close",function(){
	$(".info").slideUp(300);
});

//保存修改
$(".header").on("click","#save",function(){
	var newinfo = {};
	var pass = $("#upass").val();
	var photo = $("#uphoto").val();
	var tel = $("#utel").val();
	var mail = $("#umail").val();
	newinfo.id = uid;
	newinfo.acc = acc;
	newinfo.pass = pass;
	newinfo.photo = photo;
	newinfo.tel = tel;
	newinfo.mail = mail;
	if(pass == null || pass == "" || photo == null || photo == "" || tel == null || tel =="" || mail == null || mail ==""){
		alert("请填写完整信息！");
	}else{
		$.ajax({
			type:"post",
			url:"http://localhost:8080/users/updateuserinfo",
			contentType:"application/json;charset=utf-8",
			data:JSON.stringify(newinfo),
			async: true,
			success:function(data){
				if(data == null || data == ""){
					alert("修改失败，请检查！");
					return false;
				}else{
					setTimeout("alert('修改成功！')", 500);
					$(".info").slideUp(300);
					//修改缓存
					sessionStorage.setItem("userinfo",JSON.stringify(newinfo));
					setTimeout("window.location.reload()",1000);
				}
			}
		});
	}
	
});


//查看订单
var i = 0;
$("#show").click(function(){
	i++;
	if(i % 2 == 0){
		$(".hide").slideUp(300);
		$(".orders").css("height","80px");
	}else{
		$(".orders").css("height","430px");
		$(".hide").slideDown(300);
	}
});

$("#pick").click(function(){
	$(".hide").slideUp(300);
	$(".orders").css("height","80px");
});


//管理订单跳转
$("#link").click(function(){
	location = "shopcart.html";
});
