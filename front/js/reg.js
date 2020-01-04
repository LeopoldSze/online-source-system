//判断用户名
var isName = function(msg){
	var re = /^[a-zA-Z]\w+/;
	return re.test(msg);
};

//判断电话
var isTel = function(msg){
	var re = /^1[3-9]\d{9}$/;
	return re.test(msg);
};

//判断邮箱
var isMail = function(msg){
	var re = /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return re.test(msg);
};
