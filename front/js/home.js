$(function(){
	//轮播图
	$.ajax({
		type:"get",
		url:"http://localhost:8080/list?page=home",
		async:true,
		success:function(data){
			$("#slideImgs").tmpl(data).appendTo("#pics");
		}
	});
	
	//左侧
	$.ajax({
		type:"get",
		url:"http://localhost:8080/query?id=1",
		async:true,
		success:function(data){
			$("#homeleft").tmpl(data).appendTo("#left");
		}
	});
	
	//右侧
	$.ajax({
		type:"get",
		url:"http://localhost:8080/homerightrand",
		async:true,
		success:function(data){
			$("#homeright").tmpl(data).appendTo("#right");
		}
	});
	
	//推荐人物信息
	$.ajax({
		type:"get",
		url:"http://localhost:8080/getone",
		async:true,
		success:function(data){
			$("#recinfo").tmpl(data).appendTo("#rec");
		}
	});
	
	//推荐影片
	$.ajax({
		type:"get",
		url:"http://localhost:8080/homerightrand",
		async:true,
		success:function(data){
			$("#recmovie1").tmpl(data).appendTo("#recmovie");
		}
	});
	

	
	
});


//顶部轮播图点击跳转函数
$("#watch").click(function(){
	location = "watch.html";
});

$("#movie").click(function(){
	location = "movie.html";
});



//播放区
	$(".m-video").mouseover(function(){
		$(".controllers").show();
		$(".playline").show();
	});
	$(".m-video").mouseout(function(){
		$(".controllers").hide();
		$(".playline").hide();
	});

	
	$("#play").click(function(){
		$("#video").trigger('play');
	});
	
	$("#pause").click(function(){
		$("#video").trigger('pause');
	});
	
	$("#close").click(function(){
		$("#video").trigger('pause');
		$(".m-video").fadeOut(1500);
	});


	$("#btn1").attr({"times":"0"});                								  //按钮点击次数属性
	$("#btn1").click(function(){
		$(this).attr({"times": Number($(this).attr("times"))+1});                 //按钮点击次数更新
		if($(this).attr("times")%2==0){
			$(".m-video").fadeOut(1500);
		}
		else{
			$(".m-video").fadeIn(1500);
		}
	});
	
	

//推荐区
$(".m-about").on("mouseover",".recimg",function(){
	$(this).animate({width: '100%',height: '100%'},250);
});

$(".m-about").on("mouseout",".recimg",function(){
	$(this).animate({width: '100%', height: '70%'});
});

$(".m-about").mouseenter(function(){
	$(".arr").slideDown(200);
});
$(".m-about").mouseleave(function(){
	$(".arr").slideUp(200);
});



//闪电特效	
	var lightobj = document.getElementById("light");           		//获取canvas元素
	var ctx = lightobj.getContext("2d");					   		//创建context对象
	var LightWidth = lightobj.width;
	var LightHeight = lightobj.height;
	
	//定义坐标
	var x = LightWidth / 10;
	var y = 0;
	light = function() {
	    var r = 0;
	    ctx.beginPath();											//起始一条路径
	    ctx.moveTo(x, y);                                      		//线条开始坐标
	    r = Math.floor(Math.random() * 15);							//随机偏移量
	    if (r >= 3) {
	        x += r;
	    } else {
	        x -= r;
	    }
	    y += Math.floor(Math.random() * 15) ;	
	
	    ctx.lineTo(x, y);											//线条结束坐标
		ctx.closePath();											//创建从当前点回到起始点的路径
	    ctx.lineWidth = 1.5;
	    ctx.strokeStyle = "rgba(255, 255, 0, 0.7)";
	    ctx.stroke();                                           	//绘制已定义的路径
	    
		//判断纵坐标是否超出
	    if (y > LightHeight) {
	        ctx.clearRect(0, 0, LightWidth, LightHeight);           //清除矩形像素
	        x = LightWidth / 10;
	        y = 0;
	    }
	    requestAnimationFrame(light);                               //回调函数接口,调用动画帧
	};
	  
	light();




//分享按钮
$("#rec").on("click","#share1",function(){
	$(".u-icon1").toggle();
})


//喜欢按钮
var i  = 0;
$("#rec").on("click","#like1",function(){
	i++;
	if(i%2 == 0){
		$(this).prop("class", "fa fa-heart-o");
		$(this).css("color", "#fff");
	}else{
		$(this).prop("class", "fa fa-heart");
		$(this).css("color", "#02A388");
	}
})



//观看  收藏  选座
$(".m-show").on("mouseover",".movie i",function(){
	$(this).css("color","#02A388");
	$(this).css("transform","scale(1.3)");
});

$(".m-show").on("mouseout",".movie i",function(){
	$(this).css("color","#fff");
	$(this).css("transform","scale(1)");
});


//观看
$(".m-show").on("click",".watch",function(){
	location = "watch.html";
});

//收藏
$(".m-show").on("click",".like",function(){
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
			var name = $(this).parent().parent().find("h4").text();
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
$(".m-show").on("click",".buy",function(){
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
		var name = $(this).parent().parent().find("h4").text();
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
						infoarr.price = 5;
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




