$(function(){
	//电影列表
	$.ajax({
		type:"get",
		url:"http://localhost:8080/movies",
		async:true,
		success:function(data){
			$("#lists1").tmpl(data).appendTo("#lists");
			$("#lists li").eq(0).addClass("active");
			var src = $("#lists li").eq(0).find("img").prop("src");
			var realsrc = src.substr(src.lastIndexOf("/")+1);
			movieimg= "imgs/movie/"+realsrc;
			sessionStorage.setItem("movies",JSON.stringify(data));
		}
	});
	
	//头部信息
	moviesInfo();
	//座位信息显示函数,票价为80	
	choose(80);

});

//选择电影，对应电影信息刷新
var movieimg;
$("#lists").on("click", ".movieimg",function(){
	$(this).toggleClass("active").siblings().removeClass("active");	
	
	//电影图片
	var src = $(this).find("img").prop("src");
	var realsrc = src.substr(src.lastIndexOf("/")+1);
	movieimg= "imgs/movie/"+realsrc;
	
	var id = $(this).prop("id");
	var name = $(this).find("span").eq(0).text();
	$("#moviename").text(name);
	$("#headerinfo").empty();
	$.ajax({
		type:"get",
		url:"http://localhost:8080/movieone?id="+id,
		async:true,
		success:function(data){
			$("#headerinfo1").tmpl(data).appendTo("#headerinfo");
		}
	});
});


//信息加载函数
var moviesInfo = function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/movieone?id=1",
		async:true,
		success:function(data){
			$("#headerinfo1").tmpl(data).appendTo("#headerinfo");
		}
	});
}




//日期插件：选择日期
//往后60天可选
laydate.render({
  elem: '#cal'
  ,min: 0
  ,max: 60
})


//时间点击
var movietime;
$(".time").click(function(){
	$(this).css("background","#25590F").siblings().css("background","#666");
	$(this).attr("sel","1").siblings().attr("sel","0");
	movietime =  $(this).val();
})



//选座函数
var choose = function(price){
	var $cart = $('#selected-seats'), 	//座位区
    $counter = $('#counter'), 			//票数
    $total = $('#total'); 				//总计金额
      
    var sc = $('#seat-map').seatCharts({
        map: [  //座位图
            'aaaaaaaaaaaaa_',
            'aaaaaaaaaaaaa_',
            '______________',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaa',
            'aa__aa__aa__aa'
        ],
        legend : { //定义图例
            node : $('#legend'),
            items : [
                [ 'a', 'available',   '可选座' ],
                [ 'a', 'unavailable', '已售出']
            ]                    
        },
        
        click: function () { //点击事件
            if (this.status() == 'available') { //可选座
                $('<li>'+(this.settings.row+1)+'排'+this.settings.label+'座</li>')
                    .attr('id', 'cart-item-'+this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);
  
                $counter.text(sc.find('selected').length+1);
                $total.text(recalculateTotal(sc,price)+price);
                              
                return 'selected';
            } else if (this.status() == 'selected') { //已选中
                //更新数量
                $counter.text(sc.find('selected').length-1);
                //更新总计
                $total.text(recalculateTotal(sc,price)-price);
                          
                //删除已预订座位
                $('#cart-item-'+this.settings.id).remove();
                //可选座
                return 'available';
            } else if (this.status() == 'unavailable') { //已售出
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });
    //已售出的座位
    sc.get(['1_2', '4_4','4_5','5_12','6_6','6_7','8_5','8_6','8_7','8_8', '10_1', '10_2','12_5','12_6']).status('unavailable');
}



//计算总金额
function recalculateTotal(sc,price) {
    var total = 0;
    sc.find('selected').each(function () {
        total += price;
    });
              
    return total;
}




//点击购买
$("#buy").click(function(){
	if(sessionStorage.getItem("userinfo") == null || sessionStorage.getItem("userinfo") == ""){
		alert("您还未登录，请先登录！");
	}else{
		if($("#selected-seats").html() == "" || $("#selected-seats").html() == null){
			alert("您还未选择座位！");
		}else{
			var userObj = JSON.parse(sessionStorage.getItem("userinfo"));
			var uid = userObj.id;										 //用户id
			var gid = Math.floor(Math.random()*100+100) ;				 //商品id,100-200
			var moviename = $("#moviename").text();						 //电影名称
			var moviedate = $("#cal").val();							 //电影日期
			var seats = $("#selected-seats").children().text();          //已选座位信息
			var tickets = $("#counter").text();							 //票数
			var money = $('#total').text();								 //总价
			var flag = false;										     //标志位：false表示缓存为空，true表示缓存不为空
			var ticketinfo = {};										 //定义缓存对象
			ticketinfo.uid = uid;
			ticketinfo.gid = gid;
			ticketinfo.moviename = moviename;
			ticketinfo.movieimg = movieimg;
			ticketinfo.moviedate = moviedate;
			ticketinfo.movietime = movietime;
			ticketinfo.seats = seats;
			ticketinfo.tickets = tickets;
			ticketinfo.money = money;
			var ticketarr = new Array();                                 //定义缓存数组
			if(uid==null || uid=="" || moviename==null || moviename=="" || moviedate==null || moviedate=="" || movietime==null || movietime==""){
				alert("请选择完整信息！");
			}else{
				if(window.localStorage){
					if(localStorage.getItem("ticketinfo") != null){
						ticketarr = JSON.parse(localStorage.getItem("ticketinfo"));
						//循环判断商品信息
						for(var i = 0; i < ticketarr.length; i++){
							if(ticketarr[i].uid == uid && ticketarr[i].moviename == moviename && ticketarr[i].moviedate == moviedate && ticketarr[i].movietime == movietime){
								var infoarr = ticketarr[i];
								infoarr.seats = seats;
								infoarr.tickets = tickets;
								infoarr.money = money;
								flag = true;
							};								
						};
					};
				};
				if(flag == false){
					ticketarr.push(ticketinfo);
				};
				localStorage.setItem("ticketinfo", JSON.stringify(ticketarr));
				setTimeout("alert('选座成功!')",200);
				window.location.reload();
			}
		};
	};
});

//付费
var cardinfo;						//影城卡信息
var cardprice;						//影城卡价格
var cardimg;						//影城卡图片
$(".card").click(function(){
	$(this).css("background","#25590F");
	$(this).prop("disabled","disabled").siblings().css("background","#4B4346").prop("disabled","disabled");
	cardinfo = $(this).val();									//影城卡信息
	cardprice = parseFloat($(this).val());						//影城卡价格
	
	var src = $(this).parent().parent().find("img").prop("src");
	var realsrc = src.substr(src.lastIndexOf("/")+1);
	cardimg= "imgs/movie/"+realsrc;								//影城卡图片
	
	var userObj = JSON.parse(sessionStorage.getItem("userinfo"));
	var uid = userObj.id;										 //用户id
	var gid = Math.floor(Math.random()*50+200) ;				 //商品id,200-250
	var flag = false;										     //标志位：false表示缓存为空，true表示缓存不为空
	var info = {};										         //定义缓存对象
	info.uid = uid;
	info.gid = gid;
	info.cardinfo = cardinfo;
	info.cardimg = cardimg;
	info.cardprice = cardprice;
	var cardarr = new Array();  								 //定义缓存数组
	if(window.localStorage){
		if(localStorage.getItem("cardsinfo") != null){
			cardsarr = JSON.parse(localStorage.getItem("cardsinfo"));
			//循环判断商品信息
			for(var i = 0; i < cardsarr.length; i++){
				if(cardsarr[i].uid == uid && cardsarr[i].cardinfo == cardinfo){
					var infoarr = cardsarr[i];
					infoarr.cardinfo = cardinfo;
					infoarr.cardimg = cardimg;
					infoarr.cardprice = cardprice;
					flag = true;
				};								
			};
		};
	};
	if(flag == false){
		cardarr.push(info);
	};
	localStorage.setItem("cardsinfo", JSON.stringify(cardarr));
	setTimeout("alert('成功加入购物车！')",300);
});




//进入购物车
$(".enter").click(function(){
	setTimeout("location = 'shopcart.html'",300);
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

	
	//播放	
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

