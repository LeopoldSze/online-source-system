//回到顶部
window.onscroll = function (){ 
   	var topobj = document.getElementById("top");     	 //获取对象top
  	var st = document.documentElement.scrollTop;         //获取屏幕滚动高度                           
	
	//判断滚动条件,滚动高度大于150px,图标显示,否则隐藏
  	if( st >= 150 ){ 		
  		topobj.style.display = 'block';
  	}
  	else{
  	   	topobj.style.display = 'none';
  	};

	 //图标点击函数
  	topobj.onclick = function (){
  		 var v = -40;
  		//设置定时器对象
  		var sobj = setInterval(function (){
  			st += v;
  			if( st <= 0 ){
  				st = 0;
  				clearInterval(sobj);     				//滚动高度为0时清除定时器
  			};
  			document.documentElement.scrollTop = st;  	//更新屏幕滚动高度
  		}, 10);
  	};
  };