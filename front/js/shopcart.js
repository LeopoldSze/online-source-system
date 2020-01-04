$(function(){
	if(sessionStorage.getItem("userinfo") == null || sessionStorage.getItem("userinfo") === ""){
		$("#main").hide();
		alert("您还未登录，请先登录再查看购物车信息！");
	}else{
		var newGoods1 = getCache("ticketinfo");
		var newGoods2 = getCache("cardsinfo");
		var newGoods3 = getCache("vipinfo");
		var newGoods4 = getCache("shopinfo");
		if(newGoods1 === undefined && newGoods1 == null && newGoods1 === "" && newGoods2 === undefined && newGoods2 == null && newGoods2 === ""){
			$("#main").hide();
			alert("购物车还没有物品，去挑选吧！");
		}else{
			//插入电影票信息
			$("#moviesinfo").tmpl(newGoods1).appendTo("#main");
			//插入影城卡信息
			$("#cardinfo").tmpl(newGoods2).appendTo("#main");
			//插入会员卡信息
			$("#vipinfo").tmpl(newGoods3).appendTo("#main");
			//插入视频信息
			$("#shopinfo").tmpl(newGoods4).appendTo("#main");
		}
	}
	
})

$("#fa").mouseenter(function(){
	$("#search").fadeIn(200);
	setTimeout("$('#search').fadeOut(200)",5000);
});



//全选 全不选
	$(".chooseAll").click(function(){
		$(".choose").prop("checked",$(this).prop("checked"));
		if($(this).prop("checked")){
			getTotal();
			getNum();
		}else{
			$("#totalprice").text(0);
			$("#num").text(0);
		}
	})
	
//单选
	$("#main").on("click", ".chooseOne", function(){
		var priceT = 0;
		var numT = 0;
		var flag = true;
		$(".chooseOne").each(function(item,index){
			if($(this).prop("checked")){
				var price1 = $(this).parent().siblings().eq(4).text();
				priceT = parseInt(priceT) + parseInt(price1);
				var num1 = $(this).parent().siblings().eq(3).find("input").val();
				numT = numT + parseInt(num1);
			}else{
				flag = false;
			};
		});
		priceT = parseInt(priceT*100);					
		$("#totalprice").text(priceT/100);
		$("#num").text(numT);
		$(".chooseAll").prop("checked",flag);
	});


//删除一项
$("#main").on("click", ".del", function(){
	if(window.confirm("确认删除该商品吗？")){
		$(this).parent().parent().remove();
	    var gid = $(this).parent().siblings().eq(0).find("input").prop("id");
		delCache(gid,"ticketinfo");
		delCache(gid,"cardsinfo");
		delCache(gid,"vipinfo");
		delCache(gid,"shopinfo")
		setTimeout("alert('删除成功！')",500);
		setTimeout("window.location.reload()",200);
	}else{
		return false;
	}
});


//全部删除
$("#delAll").click(function(){
	var flag = window.confirm("是否删除所选记录？");
	$(".chooseOne:checked").each(function(item,index){
		if(flag){
			$(".chooseOne:checked").parent().parent().parent().remove();
			//删除缓存
			delCache(this.id, "ticketinfo");
			delCache(this.id, "cardsinfo");
			delCache(this.id, "vipinfo");
			delCache(this.id, "shopinfo");
		};			
	});
	setTimeout("alert('删除成功！')",500);
	setTimeout("window.location.reload()",200);
	setTimeout("alert('购物车还没有物品，去挑选吧！')",1000);
});


//结算点击
$("#check").click(function(){
	if(sessionStorage.getItem("userinfo") == null || sessionStorage.getItem("userinfo") == ""){
		alert("您还未登录，请先登录！");
	}else{
		//判断选中哪些商品,选中的商品提交到后台
		var gidarr = new Array();
		$(".chooseOne").each(function(item,index){
			if($(this).prop("checked")){
				gidarr.push($(this).prop("id"));
				setTimeout("$(this).parent().parent().parent().remove()",3000);
			}
			return gidarr;
		});
		//循环遍历gid，找到缓存中匹配的商品
		var checkedticketarr = new Array();							//定义新的存放提交电影票数组
		var checkedcardarr = new Array();							//定义新的存放提交影城卡数组	
		var checkedviparr = new Array();							//定义新的存放提交会员卡数组
		var checkedshoparr = new Array();							//定义新的存放提交资源数组
		for(var i = 0; i < gidarr.length; i++){
			//判断电影票是否匹配
			var ticketObj = localStorage.getItem("ticketinfo");
			var ticketinfo = JSON.parse(ticketObj);
			for(var j = 0; j < ticketinfo.length; j++){
				if(gidarr[i] == ticketinfo[j].gid){
					checkedticketarr.push(ticketinfo[j]);
				}
			};
			
			//判断影城卡是否匹配
			var cardinfo = JSON.parse(localStorage.getItem("cardsinfo"));
			for(var k = 0; k < cardinfo.length; k++){
				if(gidarr[i] == cardinfo[k].gid){
					checkedcardarr.push(cardinfo[k]);
				}
			}	
			
			//判断会员卡是否匹配
			var vipinfo = JSON.parse(localStorage.getItem("vipinfo"));
			for(var n = 0; n < vipinfo.length; n++){
				if(gidarr[i] == vipinfo[n].gid){
					checkedviparr.push(vipinfo[n]);
				}
			}
			
			//判断资源是否匹配
			var shopinfo = JSON.parse(localStorage.getItem("shopinfo"));
			for(var m = 0; m < shopinfo.length; m++){
				if(gidarr[i] == shopinfo[m].gid){
					checkedshoparr.push(shopinfo[m]);
				}
			}
			
			//删除相应缓存
			delCache(gidarr[i],"ticketinfo");
			delCache(gidarr[i],"cardsinfo");
			delCache(gidarr[i],"vipinfo");
			delCache(gidarr[i],"shopinfo");
		}
		
		//保存电影票信息到后端
		for( var i=0; i < checkedticketarr.length; i++){
			var ticketinfo = checkedticketarr[i];
			$.ajax({
				type:"post",
				url:"http://localhost:8080/savetickets",
				contentType:"application/json;charset=utf-8",
				data:JSON.stringify(ticketinfo),
				async: true,
				success:function(data){
					if(data == null || data == ""){
						alert("提交失败，请检查！");
						return false;
					}
				}
			});
		}

		//保存影城卡信息到后端
		for( var j=0; j < checkedcardarr.length; j++){
			var cardinfo = checkedcardarr[j];
			$.ajax({
				type:"post",
				url:"http://localhost:8080/savecards",
				contentType:"application/json;charset=utf-8",
				data:JSON.stringify(cardinfo),
				async: true,
				success:function(data){
					if(data == null || data == ""){
						alert("提交失败，请检查！");
						return false;
					}
				}
			});
		}
		
		//保存会员卡信息到后端
		for( var k=0; k < checkedviparr.length; k++){
			var vip = checkedviparr[k];
			$.ajax({
				type:"post",
				url:"http://localhost:8080/savevip",
				contentType:"application/json;charset=utf-8",
				data:JSON.stringify(vip),
				async: true,
				success:function(data){
					if(data == null || data == ""){
						alert("提交失败，请检查！");
						return false;
					}
				}
			});
		}
		
		//保存资源信息到后端
		for( var m=0; m < checkedshoparr.length; m++){
			var shop = checkedshoparr[m];
			$.ajax({
				type:"post",
				url:"http://localhost:8080/saveshop",
				contentType:"application/json;charset=utf-8",
				data:JSON.stringify(shop),
				async: true,
				success:function(data){
					if(data == null || data == ""){
						alert("提交失败，请检查！");
						return false;
					}
				}
			});
		}
				
		alert("订单提交成功！");
		window.location.reload();
	}
});


//计算总价
var getTotal = function(){
	var total = 0;
	var priceList = document.getElementsByClassName("price");
	for(var i = 0; i < priceList.length; i++){
		total +=  parseFloat(priceList[i].innerHTML)*100;
	}
	total /= 100;
	$("#totalprice").text(total);
}


//计算商品数量
var getNum = function(){
	var num = 0;
	var numList = document.getElementsByClassName("num1");
	for(var i = 0; i < numList.length; i++){
		num +=  parseInt(numList[i].value);
	}
	$("#num").text(num);
}


//读取缓存
var getCache = function(obj){
	var userObj = JSON.parse(sessionStorage.getItem("userinfo"));
	if(window.localStorage){
		if(localStorage.getItem(obj) != null){
			var ticketObj = JSON.parse(localStorage.getItem(obj));
			var newTicket = ticketObj.filter(function(item, index){
				return item.uid == userObj.id;
			});
			console.log("该电影票的缓存信息是：");
			console.log(newTicket);
			return newTicket;
		};
	};
};

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
