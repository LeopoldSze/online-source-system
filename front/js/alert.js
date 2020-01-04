//弹出框函数
var alert = function(msg){
	$(".m-nav").append("<div id='msg'><span>"+msg+"</span></div>");
    clearmsg();
};




//清除弹出框函数
var clearmsg = function(){
	var t = setTimeout(function(){
        $("#msg").remove();
    },1000)
};