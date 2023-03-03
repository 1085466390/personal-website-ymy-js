// JavaScript Document

//点击右侧时间轴改变左侧响应内容的功能

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var bar4 = document.getElementById("bar4");
//取出右侧时间轴的对象
var oChange1 = document.getElementById("change1");
var oChange2 = document.getElementById("change2");
var oChange3 = document.getElementById("change3");
var oChange4 = document.getElementById("change4");
//取出相对应的显示板块

bar1.onclick = function(){
	//当bar1被单击时调用函数
	if(oChange1.className == "myHide"){
		oChange1.className = "myShow";
		oChange2.className = "myHide";
		oChange3.className = "myHide";
		oChange4.className = "myHide";
		bar1.className = "barShow";
		bar2.className = "barHide";
		bar3.className = "barHide";
		bar4.className = "barHide";
		//如果响应的模板隐藏时，则使其他的都隐藏，使其显示
	}else{
		oChange1.className = "myHide";
		bar1.className = "barHide";
		//如果响应模板显示时，则使其隐藏
	}
}

bar2.onclick = function(){
	if(oChange2.className == "myHide"){
		oChange2.className = "myShow";
		oChange1.className = "myHide";
		oChange3.className = "myHide";
		oChange4.className = "myHide";
		bar2.className = "barShow";
		bar1.className = "barHide";
		bar3.className = "barHide";
		bar4.className = "barHide";
		//如果响应的模板隐藏时，则使其他的都隐藏，使其显示
	}else{
		oChange2.className = "myHide";
		bar2.className = "barHide";
		//如果响应模板显示时，则使其隐藏		
	}
}

bar3.onclick = function(){
	if(oChange3.className == "myHide"){
		oChange3.className = "myShow";
		oChange1.className = "myHide";
		oChange2.className = "myHide";
		oChange4.className = "myHide";
		bar3.className = "barShow";
		bar2.className = "barHide";
		bar1.className = "barHide";
		bar4.className = "barHide";
		//如果响应的模板隐藏时，则使其他的都隐藏，使其显示
	}else{
		oChange3.className = "myHide";
		bar3.className = "barHide";
		//如果响应模板显示时，则使其隐藏
	}
}

bar4.onclick = function(){
	if(oChange4.className == "myHide"){
		oChange4.className = "myShow";
		oChange1.className = "myHide";
		oChange2.className = "myHide";
		oChange3.className = "myHide";
		bar4.className = "barShow";
		bar2.className = "barHide";
		bar3.className = "barHide";
		bar1.className = "barHide";
		//如果响应的模板隐藏时，则使其他的都隐藏，使其显示
	}else{
		oChange4.className = "myHide";
		bar4.className = "barHide";
		//如果响应模板显示时，则使其隐藏
	}
}