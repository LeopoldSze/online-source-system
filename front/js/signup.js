//表单验证

//必填项
	$(".reg").each(function(){
		$(this).after("<span class='must'>*</span>");
	});
	
//判断输入信息是否合法
$(".reg").blur(function(){
	var parent = $(this).parent();
	//先找到标记并去除
	parent.find(".fa").remove();
		
	//判断是否选中输入框
	if($(this).is("#username")){
		var nameval = $(this).val();
		if(nameval=="" || nameval.length<6 || !isName(nameval)){
			$(this).after("<i class='fa fa-close error' style='width:20%;margin-left:20px;margin-right:0px'>用户名长度至少为6位</i>");
			parent.find(".must").remove();
		}else{
			$(this).after("<i class='fa fa-check-circle success'></i>");
			parent.find(".must").remove();
		};
	}else if($(this).is("#pwd")){
		var pwdval = $(this).val();
		if(pwdval=="" || pwdval.length<8 ){
			$(this).after("<i class='fa fa-close error' style='width:20%;margin-left:20px;margin-right:0px'>密码长度至少为8位</i>");
			parent.find(".must").remove();
		}else{
			$(this).after("<i class='fa fa-check-circle success'></i>");
			parent.find(".must").remove();
		};
	}else if($(this).is("#repwd")){
		var reval = $(this).val();
		if(reval!=$("#pwd").val()){
			$(this).after("<i class='fa fa-close error' style='width:20%;margin-left:20px;margin-right:0px'>两次密码不一致</i>");
			parent.find(".must").remove();
		}else{
			$(this).after("<i class='fa fa-check-circle success'></i>");
			parent.find(".must").remove();
		};
	}else if($(this).is("#mail")){
		var mailval = $(this).val();
		if(mailval=="" || !isMail(mailval) ){
			$(this).after("<i class='fa fa-close error' style='width:20%;margin-left:20px;margin-right:0px'>邮箱格式不正确</i>");
			parent.find(".must").remove();
		}else{
			$(this).after("<i class='fa fa-check-circle success'></i>");
			parent.find(".must").remove();
		};
	}else{
		var telval = $(this).val();
		if(telval=="" || telval.length<11 || !isTel(telval) ){
			$(this).after("<i class='fa fa-close error' style='width:20%;margin-left:20px;margin-right:0px'>电话格式不正确</i>");
			parent.find(".must").remove();
		}else{
			$(this).after("<i class='fa fa-check-circle success'></i>");
			parent.find(".must").remove();
		};
	};
});






var i = 0;
//同意条款点击
$("#check").click(function(){
	i++;
	if(i%2 == 0){
		$(this).prop("class", "fa fa-square-o");
	}else{			
		$(this).prop("class", "fa fa-check-square-o");
	};			
});


//注册
$("#start").click(function(){
	var usr = {};
	usr.acc = $("#username").val();
	usr.pass = $("#pwd").val();
	usr.tel = $("#tel").val();
	usr.mail = $("#mail").val();
	//判断信息是否补全
	if(usr.acc=="" || usr.acc==null || usr.pass=="" || usr.pass==null || $("#repwd").val()=="" || $("#repwd").val()==null || usr.tel=="" || usr.tel==null || usr.mail=="" || usr.mail==null){
		alert("请填写完整信息！");
		return false;
	}else{
		//判断是否同意条款
		if( $("#check").prop("class") !== "fa fa-check-square-o"){
			alert("请勾选同意条款！");
			return false;
		}else{
				$.ajax({
				type:"post",
				url:"http://localhost:8080/users/regis",
				contentType:"application/json;charset=utf-8",
				data:JSON.stringify(usr),
				async: true,
				success:function(data){
					console.log(data);
					if(data == null || data === ""){
						alert("账号已存在，请重新输入！");
						return false;
					}else{
						alert("注册成功，欢迎您！");
						//存入本地缓存,然后跳转到主页
						window.sessionStorage.setItem("userinfo",JSON.stringify(data));
						window.location = "home.html";
					}
				}
			});
		};
		
	}
	
});


//按钮
$("#getBtn").mouseover(function(){
	$(this).css("background","#02A388");
});
$("#getBtn").mouseout(function(){
	$(this).css("background","#AC9455");
});
$("#start").mouseover(function(){
	$(this).css("background","#02A388");
});
$("#start").mouseout(function(){
	$(this).css("background","#AC9455");
});





//底部：其他账号登录
$(".u-icon i").mouseover(function(){
	$(this).css({"color":"#02A388"});	
});
$(".u-icon i").mouseout(function(){
	$(this).css({"color":"#fff"});	
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

