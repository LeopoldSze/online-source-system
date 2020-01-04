//搜索点击
var i = 0;
$("#search").click(function(){
	i++;
	if(i%2 != 0){
		$("#area").fadeIn(500);
		$("#area").animate({width: '200px'},200);
	}else{
		$("#area").animate({width: '0px'},200);
		$("#area").fadeOut(500);
	};
	
});

//记住密码点击
$("#check").click(function(){
	i++;
	if(i%2 == 0){
		$(this).prop("class", "fa fa-square-o");	
	}else{			
		$(this).prop("class", "fa fa-check-square-o");
	};			
});

//登录按钮点击
$("#login").click(function(){
	var usr = {};
	usr.acc = $("#username").val();
	usr.pass = $("#password").val();
	if($("#username").val() == null || $("#username").val() == "" || $("#password").val() == null || $("#password").val() ==""){
		alert("请填写完整信息！");
	}else{
		$.ajax({
			type:"post",
			url:"http://localhost:8080/users/login",
			contentType:"application/json;charset=utf-8",
			data:JSON.stringify(usr),
			async: true,
			success:function(data){
				if(data == null || data == ""){
					alert("用户名或密码错误！")
				}else{
					alert("登录成功！");
					//存入本地缓存,然后跳转到主页
					window.sessionStorage.setItem("userinfo",JSON.stringify(data));
					window.location = "home.html";
				};
			}
		});
	};
	
});





//弹出框函数
var alert = function(msg){
	$("body").append("<div id='msg'><span>"+msg+"</span></div>");
    clearmsg();
};
//清除弹出框函数
var clearmsg = function(){
	var t = setTimeout(function(){
        $("#msg").remove();
    },1000)
};

$(function(){
	console.log(window.history)
})
