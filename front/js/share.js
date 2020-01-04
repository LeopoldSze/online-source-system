//分享按钮
$("#share").click(function(){
	$(".u-icon").toggle();
});

//喜欢按钮
var i  = 0;
$("#like").click(function(){
	i++;
	if(i%2 == 0){
		$(this).prop("class", "fa fa-heart-o");
		$(this).css("color", "#fff");
	}else{
		$(this).prop("class", "fa fa-heart");
		$(this).css("color", "#02A388");
	}
	
});
