$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/video1",
		async:true,
		success:function(data){
			$("#lists1").tmpl(data).appendTo("#list1");
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://localhost:8080/video2",
		async:true,
		success:function(data){
			$("#lists2").tmpl(data).appendTo("#list2");
		}
	});
	
	
})



//点击滑动
$(".arr_left").click(function(){
	var left = parseInt($(".all").css("left"));
	$(".all").animate({
		left:'+=100%'
	},500);
	
});

$(".arr_right").click(function(){
	var left = parseInt($(".all").css("left"));
	$(".all").animate({
		left:'-=100%'
	},500);
	
});

//点击切换播放
$(".top").on("click",".video",function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(this).find("img").css("opacity","0.9");
	var src = $(this).find("video").prop('src');
	var new_src = "imgs/video/"+src.substr(src.lastIndexOf("/")+1);
	$("#disp").prop("src",new_src);
})





//会员卡
var vipinfo;						//会员卡信息
var vipprice;						//会员卡价格
var vipimg;							//会员卡图片
$(".vip").click(function(){
	vipinfo = $(this).val();
	vipprice = parseFloat($(this).val());
	
	$(this).css("background","#25590F");
	$(this).prop("disabled","disabled").siblings().css("background","#4B4346").prop("disabled","disabled");
	
	var src = $(this).parent().parent().find("img").prop("src");
	var realsrc = src.substr(src.lastIndexOf("/")+1);
	vipimg= "imgs/movie/"+realsrc;
	
	var userObj = JSON.parse(sessionStorage.getItem("userinfo"));
	var uid = userObj.id;										 //用户id
	var gid = Math.floor(Math.random()*50+250) ;				 //商品id,250-300
	var flag = false;										     //标志位：false表示缓存为空，true表示缓存不为空
	var info = {};										         //定义缓存对象
	info.uid = uid;
	info.gid = gid;
	info.vipinfo = vipinfo;
	info.vipimg = vipimg;
	info.vipprice = vipprice;
	var viparr = new Array();  								 //定义缓存数组
	if(window.localStorage){
		if(localStorage.getItem("vipinfo") != null){
			cardsarr = JSON.parse(localStorage.getItem("vipinfo"));
			//循环判断商品信息
			for(var i = 0; i < viparr.length; i++){
				if(viparr[i].uid == uid && viparr[i].vipinfo == vipinfo){
					var infoarr = viparr[i];
					infoarr.vipinfo = vipinfo;
					infoarr.vipimg = vipimg;
					infoarr.vipprice = vipprice;
					flag = true;
				};								
			};
		};
	};
	if(flag == false){
		viparr.push(info);
	};
	localStorage.setItem("vipinfo", JSON.stringify(viparr));
	setTimeout("alert('成功加入购物车！')",300);
});


//结算
$("#enter").click(function(){
	location = "shopcart.html";
})
