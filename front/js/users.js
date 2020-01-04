if(window.sessionStorage){
	//获取缓存数据
	var userInfo = sessionStorage.getItem("userinfo");
	//判断数据是否为空
	if(userInfo != null){
		//将JSON字符串转为JSON对象
		var userObj = JSON.parse(userInfo);
		//判断对象是否为空，将信息输出到登录区域
		if(userObj != null){
			$("#userarea").html("<img src="+userObj.photo+">"+"<a href='user.html'>"+userObj.acc+"</a>");
		}
	}else{
		$("#userarea").html("<a href='signin.html' style='color:#f00'>请登录</a>");
	}
}

//退出登录
$("#exit").click(function(){
	exitUser();
});


//用户退出,清除登录信息，刷新页面
var exitUser = function(){
	if(window.sessionStorage){
		sessionStorage.removeItem("userinfo");
		window.location.reload();
	}
}


var isLogin = function(){
	//获取缓存数据
	var userInfo = sessionStorage.getItem("userinfo");
	//判断数据是否为空
	if(userInfo != null){
		//将JSON字符串转为JSON对象
		var userObj = JSON.parse(userInfo);
		//判断对象是否为空，将信息输出到登录区域
		if(userObj == null){
			window.location = "home.html";
		}
	}
}
