//轮播图
	var a = 0;
	var timer = null;
	//切换函数
	slide = function(){
		$(".m-pics img").eq(a).fadeIn(3000).siblings().hide();
		$(".buttons span").eq(a).addClass("on").siblings().removeClass("on");
		$(".u-intr").eq(a).addClass("active").siblings().removeClass("active");
	}
	
	//自动播放函数
	autoplay = function(){
		//定时器
		 timer = setInterval(function(){
			(a<5)?(a++):(a = 0);
			slide();
		},3000);	
	}	
	autoplay();
	
	//鼠标移入移出函数
	$(".m-slide").hover(function(){
		clearInterval(timer);            //鼠标移入	清除定时播放
	},function(){
		autoplay();                      //鼠标移除，自动播放
	});
	
	//下标点击函数
	$(".buttons span").click(function(){
		a = $(this).index();
		slide();
	})
		
	//左右点击切换函数
	$("#pre").click(function(){
		(a>0)?(a--):(a = 4);
		slide();
	});
	$("#next").click(function(){
		(a<5)?(a++):(a = 0);
		slide();
	})