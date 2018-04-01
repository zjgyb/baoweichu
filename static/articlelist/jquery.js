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

var datas=[
    {"did":1,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":2,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":3,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":4,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":5,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":6,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":7,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":8,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":9,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":10,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":11,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":12,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":13,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":14,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":15,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":16,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":17,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":18,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":19,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":20,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"},
    {"did":21,"name":"第三十个安全教育月实施计划","time":"2017\/01\/12"}
];
var options={
	"id":"page",//显示页码的元素
	"data":datas,//显示数据
    "maxshowpageitem":1,//最多显示的页码个数
    "pagelistcount":6,//每页显示数据个数
    "callBack":function(result){
    	     var cHtml="";
        for(var i=0;i<result.length;i++){
            cHtml+="<li>"+"<a href=\"#\">"+ result[i].name+"<\/a>"+"<span class=\"article-time\">"+result[i].time+"<\/span>"+"</li>";//处理数据
        }
        $("#demoContent").html(cHtml);//将数据增加到页面中
    }
};
   page.init(datas.length,1,options);