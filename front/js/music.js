$(function(){
	//最近热门
	$.ajax({
		type:"get",
		url:"http://localhost:8080/randaudio",
		async:true,
		success:function(data){
			$("#audiolist").tmpl(data).appendTo("#audios");
		}
	});
	
	//韩语
	$.ajax({
		type:"get",
		url:"http://localhost:8080/kinds1",
		async:true,
		success:function(data){
			$("#kindslist").tmpl(data).appendTo("#kind1");
		}
	});
	
	//国语
	$.ajax({
		type:"get",
		url:"http://localhost:8080/kinds2",
		async:true,
		success:function(data){
			$("#kindslist").tmpl(data).appendTo("#kind2");
		}
	});
	
	//英语
	$.ajax({
		type:"get",
		url:"http://localhost:8080/kinds3",
		async:true,
		success:function(data){
			$("#kindslist").tmpl(data).appendTo("#kind3");
		}
	});
	
	//日语
	$.ajax({
		type:"get",
		url:"http://localhost:8080/kinds4",
		async:true,
		success:function(data){
			$("#kindslist").tmpl(data).appendTo("#kind4");
		}
	});

})



//播放
$("#audios").on("click",".watch",function(){
	var id = $(this).parent().parent().find("input").prop("id");
	audio.src = trackUrl[id-1];
	audio.albums = albums[id-1];
})



//喜欢按钮
var i  = 0;
$("#audios").on("click",".like",function(){
	i++;
	if(i%2 == 0){
		$(this).prop("class", "fa fa-heart-o");
		$(this).css("color", "#fff");
	}else{
		$(this).prop("class", "fa fa-heart");
		$(this).css("color", "#02A388");
	}
})



//收藏
$("#audios").on("click",".like",function(){
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
			var name = $(this).parent().parent().find(".name").text();
			coll.uid = uid;
			coll.gid = gid;
			coll.src = src;
			coll.name = name;
			if(window.localStorage){
				if(localStorage.getItem("collsinfo") != null){
					collarr = JSON.parse(localStorage.getItem("collsinfo"));
					//循环判断商品信息
					for(var i = 0; i < collarr.length; i++){
						if(collarr[i].uid == uid && collarr[i].name == name){
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
$("#audios").on("click",".buy",function(){
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
		var name = $(this).parent().parent().find(".name").text();
		shop.uid = uid;
		shop.gid = gid;
		shop.src = src;
		shop.name = name;
		shop.price = 3;
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
						infoarr.price = 3;
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
