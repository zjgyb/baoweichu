$(function(){
	$(".introduce-parts a div").mouseover(function(){
		$(this).addClass("parts1");
	});
	$(".introduce-parts a div").mouseout(function(){
		$(this).removeClass("parts1");
	});
	function jump1(){
		$("#divAdvert").css({"left":"0","display":"block"});
		$("#divAdvert1").css({"opacity":"0","left":"120px","display":"block"});	
	}
	setInterval(jump1,10001);
	function jump(){
		$("#divAdvert").css("display","none");
		$("#divAdvert1").css("display","none");	
	}
	setInterval(jump,4999);
	function jump2(){
		$("#divAdvert2").css("display","");
		$("#divAdvert3").css("display","");
	}
	setInterval(jump2,10001);
	
	function jump3(){
		$("#divAdvert2").css({"opacity":"0","top":"0","display":"block"});
		$("#divAdvert3").css({"opacity":"0","top":"100px","display":"block"});	
	}
	setInterval(jump3,4999);
});

