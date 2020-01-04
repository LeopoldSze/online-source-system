//页面加载插入
$(function(){
	//轮播图
	$.ajax({
		type:"get",
		url:"http://localhost:8080/list?page=moviekind",
		async:true,
		success:function(data){
			$("#slideImgs").tmpl(data).appendTo("#pics");
		}
	});
	
	//电影展示
	$.ajax({
		type:"get",
		url:"http://localhost:8080/id",
		async:true,
		success:function(data){
			$("#show1").tmpl(data).appendTo("#show");
		}
	});
	
});

//索引点击
$(".index span").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
})




//图片变化
$(".show").on("mouseover","li",function(){
	$(this).css({"transform":"scale(1.2)","transition":"0.3s"});
});
$(".show").on("mouseout","li",function(){
	$(this).css({"transform":"scale(1)","transition":"0.3s"});
});



//观看  收藏  选座
$(".show").on("mouseover",".movie i",function(){
	$(this).css("color","#02A388");
	$(this).css("transform","scale(1.3)");
});

$(".show").on("mouseout",".movie i",function(){
	$(this).css("color","#fff");
	$(this).css("transform","scale(1)");
});


//观看
$(".show").on("click",".watch",function(){
	location = "watch.html";
});

//收藏
$(".show").on("click",".like",function(){
	var gid = $(this).parent().parent().find("input").prop("id");
	if(sessionStorage.getItem("userinfo") == null || sessionStorage.getItem("userinfo") == ""){
		alert("您还未登录，请先登录！");
	}else{
		if($(this).prop("class") == "fa fa-heart-o like"){
			$(this).prop("class", "fa fa-heart like");
			$(this).css("color", "#02A388");
			//加入收藏缓存
			var uid = JSON.parse(sessionStorage.getItem("userinfo")).id;
			var collarr = [];
			var coll = {};
			var flag = false;
			var src = $(this).parent().parent().find("img").prop("src");
			var name = $(this).parent().next().text();
			coll.uid = uid;
			coll.gid = gid;
			coll.src = src;
			coll.name = name;
			if(window.localStorage){
				if(localStorage.getItem("collsinfo") != null){
					collarr = JSON.parse(localStorage.getItem("collsinfo"));
					//循环判断商品信息
					for(var i = 0; i < collarr.length; i++){
						if(collarr[i].uid == uid && collarr[i].name == name && collarr[i].src == src){
							var infoarr = collarr[i];
							infoarr.gid = gid;
							infoarr.name = name;
							infoarr.src = src;
							flag = true;
						};								
					};
				};
			};
			if(flag == false){
				collarr.push(coll);
			};
			localStorage.setItem("collsinfo", JSON.stringify(collarr));			
		}else{
			$(this).prop("class", "fa fa-heart-o like");
			$(this).css("color", "#fff");
			//删除收藏缓存
			delCache(gid,"collsinfo");
		};
	}
	
});

//加入购物车
$(".show").on("click",".buy",function(){
	var gid = $(this).parent().parent().find("input").prop("id");
	var userInfo = sessionStorage.getItem("userinfo");
	if(userInfo == null || userInfo == ""){
		alert("您未登录,请先登录账号!");
	}else{
		$(this).css("transform","rotate(45deg)");
		$(this).css("transition","0.5s");
		var uid = JSON.parse(sessionStorage.getItem("userinfo")).id;
		var shoparr = [];
		var shop = {};
		var flag = false;
		var src = $(this).parent().parent().find("img").prop("src");
		var name = $(this).parent().next().html();
		shop.uid = uid;
		shop.gid = gid;
		shop.src = src;
		shop.name = name;
		shop.price = 5;
		if(window.localStorage){
			if(localStorage.getItem("shopinfo") != null){
				shoparr = JSON.parse(localStorage.getItem("shopinfo"));
				//循环判断商品信息
				for(var i = 0; i < shoparr.length; i++){
					if(shoparr[i].uid == uid && shoparr[i].name == name){
						var infoarr = shoparr[i];
						infoarr.gid = gid;
						infoarr.name = name;
						infoarr.src = src;
						flag = true;
					};								
				};
			};
		};
		if(flag == false){
			shoparr.push(shop);
		};
		localStorage.setItem("shopinfo", JSON.stringify(shoparr));			
		setTimeout("alert('成功添加到购物车!')", 1000);
	};
});


//删除缓存
var delCache = function(gid,obj){
	console.log(gid);
	var userobj = JSON.parse(sessionStorage.getItem("userinfo"));
	if(window.localStorage){
		if(localStorage.getItem(obj) != null){
			let ticketObj = JSON.parse(localStorage.getItem(obj));
			for( let i = 0; i < ticketObj.length; i++){
				//如果gid相同则删除缓存
				if(ticketObj[i].gid == gid && ticketObj[i].uid == userobj.id){
					ticketObj.splice(i,1);					
				}				
			}
			//创建一个新的变量接收JSON数据
			let goods = JSON.stringify(ticketObj);
			localStorage.setItem(obj, goods);
			//当前使用者的购物缓存，不能把所有使用者的缓存都删掉
			var newTicket = ticketObj.filter(function(item,index){
				return item.uid == userObj.id;
			})
		};
	};
};