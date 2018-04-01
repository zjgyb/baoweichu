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

function changeImagesPrev()
{
	var images=document.imgAdvert.src;
	var fileName=images.lastIndexOf("baoweichu")+9;
	var fileName1=fileName+1;
	images=images.substring(fileName,fileName1);
	var imagesNumber;
	if(images==1)
	{
		imagesNumber=7;
	}else{
		imagesNumber=parseInt(images)-1;
	}
	document.imgAdvert.src="images\\baoweichu"+imagesNumber+".jpg";
}
function changeImagesNext()
{
	var images=document.imgAdvert.src;
	var fileName=images.lastIndexOf("baoweichu")+9;
	var fileName1=fileName+1;
	images=images.substring(fileName,fileName1);
	var imagesNumber1;
	if(images==7)
	{
		imagesNumber1=1;
	}else{
		imagesNumber1=parseInt(images)+1;
	}
	document.imgAdvert.src="images\\baoweichu"+imagesNumber1+".jpg";
}
var currentImgNumber=1;
var numberOfImages=7;
function window_onload()
{
	setTimeout("switchImage()",3000);
}
function switchImage()
{
	currentImgNumber++;
	var first=currentImgNumber;
	if(currentImgNumber<=numberOfImages)
	{
		var images=document.imgAdvert.src;
		var fileName=images.lastIndexOf("baoweichu")+9;
		var fileName1=fileName+1;
		images=images.substring(fileName,fileName1);
		if(images==first-2)
		{
			currentImgNumber=first-1;
		}
		setTimeout("switchImage()",3000);
	}
	if(currentImgNumber==8)
	{
		currentImgNumber=1;
		setTimeout("switchImage()",3000);
	}
	document.imgAdvert.src="images\\baoweichu"+currentImgNumber+".jpg";
}