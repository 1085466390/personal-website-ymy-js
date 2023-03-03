// JavaScript Document

//点击不同日期调取相应的日记功能

	var oA1 = document.getElementById("bar1");
	var oB1 = document.getElementById("bar2");
	var oC1 = document.getElementById("bar3");
	var oD1 = document.getElementById("bar4");
    var oE1 = document.getElementById("bar5");
	var oF1 = document.getElementById("bar6");
	oA1.onclick = change1;
	oB1.onclick = change2;
	oC1.onclick = change3;
	oD1.onclick = change4;
	oE1.onclick = change5;
	oF1.onclick = change6;

function change1(){
	var oA = document.getElementById("con1");
	var oB = document.getElementById("con2");
	var oC = document.getElementById("con3");
	var oD = document.getElementById("con4");
	var oE = document.getElementById("con5");
	var oF = document.getElementById("con6");
	oB.className = "myHide";oB1.innerHTML = "2010年8月";
	oC.className = "myHide";oC1.innerHTML = "2011年8月";
	oD.className = "myHide";oD1.innerHTML = "2015年7/8月";
	oE.className = "myHide";oE1.innerHTML = "2017年1/8/10月";
	oF.className = "myHide";oF1.innerHTML = "2018年8月";
	if(oA.className == "myHide"){
		oA.className = "myShow";
		oA1.innerHTML = "<img src='img/right.jpg' style='height:28px;'>2009年8月";
	//当点击对象的相应板块隐藏时，使其显示，而其他的隐藏，并且点击的日期有箭头指向
	}
	else{
		oA.className = "myHide";
		oA1.innerHTML = "2009年8月";
		//如果点击的对象相应板块显示时，使其隐藏，并且取消点击的日期有箭头指向
	}
}

function change2(){
	var oA = document.getElementById("con1");
	var oB = document.getElementById("con2");
	var oC = document.getElementById("con3");
	var oD = document.getElementById("con4");
	var oE = document.getElementById("con5");
	var oF = document.getElementById("con6");
	oA.className = "myHide";oA1.innerHTML = "2009年8月";
	oC.className = "myHide";oC1.innerHTML = "2011年8月";
	oD.className = "myHide";oD1.innerHTML = "2015年7/8月";
	oE.className = "myHide";oE1.innerHTML = "2017年1/8/10月";
	oF.className = "myHide";oF1.innerHTML = "2018年8月";
	if(oB.className == "myHide"){
		oB.className = "myShow";
		oB1.innerHTML = "<img src='img/right.jpg' style='height:28px;'>2010年8月";
	//当点击对象的相应板块隐藏时，使其显示，而其他的隐藏，并且点击的日期有箭头指向
	}
	else{
		oB.className = "myHide";
		oB1.innerHTML = "2010年9月";
		//如果点击的对象相应板块显示时，使其隐藏，并且取消点击的日期有箭头指向
	}
}
function change3(){
	var oA = document.getElementById("con1");
	var oB = document.getElementById("con2");
	var oC = document.getElementById("con3");
	var oD = document.getElementById("con4");
	var oE = document.getElementById("con5");
	var oF = document.getElementById("con6");
	oA.className = "myHide";oA1.innerHTML = "2009年8月";
	oB.className = "myHide";oB1.innerHTML = "2010年8月";
	oD.className = "myHide";oD1.innerHTML = "2015年7/8月";
	oE.className = "myHide";oE1.innerHTML = "2017年1/8/10月";
	oF.className = "myHide";oF1.innerHTML = "2018年8月";
	if(oC.className == "myHide"){
		oC.className = "myShow";
		oC1.innerHTML = "<img src='img/right.jpg' style='height:28px;'>2011年8月";
	//当点击对象的相应板块隐藏时，使其显示，而其他的隐藏，并且点击的日期有箭头指向
	}
	else{
		oC.className = "myHide";
		oC1.innerHTML = "2011年8月";
		//如果点击的对象相应板块显示时，使其隐藏，并且取消点击的日期有箭头指向
	} 
}
function change4(){
	var oA = document.getElementById("con1");
	var oB = document.getElementById("con2");
	var oC = document.getElementById("con3");
	var oD = document.getElementById("con4");
	var oE = document.getElementById("con5");
	var oF = document.getElementById("con6");
	oA.className = "myHide";oA1.innerHTML = "2009年8月";
	oB.className = "myHide";oB1.innerHTML = "2010年8月";
	oC.className = "myHide";oC1.innerHTML = "2011年8月";
	oE.className = "myHide";oE1.innerHTML = "2017年1/8/10月";
	oF.className = "myHide";oF1.innerHTML = "2018年8月";
	if(oD.className == "myHide"){
		oD.className = "myShow";
		oD1.innerHTML = "<img src='img/right.jpg' style='height:28px;'>2015年7/8月";
	//当点击对象的相应板块隐藏时，使其显示，而其他的隐藏，并且点击的日期有箭头指向
	}
	else{
		oD.className = "myHide";
		oD1.innerHTML = "2015年7/8月";
		//如果点击的对象相应板块显示时，使其隐藏，并且取消点击的日期有箭头指向
	} 
}
function change5(){
	var oA = document.getElementById("con1");
	var oB = document.getElementById("con2");
	var oC = document.getElementById("con3");
	var oD = document.getElementById("con4");
	var oE = document.getElementById("con5");
	var oF = document.getElementById("con6");
	oA.className = "myHide";oA1.innerHTML = "2009年8月";
	oB.className = "myHide";oB1.innerHTML = "2010年8月";
	oC.className = "myHide";oC1.innerHTML = "2011年8月";
	oD.className = "myHide";oD1.innerHTML = "2015年7/8月";
	oF.className = "myHide";oF1.innerHTML = "2018年8月";
	if(oE.className == "myHide"){
		oE.className = "myShow";
		oE1.innerHTML = "<img src='img/right.jpg' style='height:28px;'>2017年1/8/10月";
	//当点击对象的相应板块隐藏时，使其显示，而其他的隐藏，并且点击的日期有箭头指向
	}
	else{
		oD.className = "myHide";
		oD1.innerHTML = "2017年1/8/10月"
		//如果点击的对象相应板块显示时，使其隐藏，并且取消点击的日期有箭头指向
	} 
}
function change6(){
	var oA = document.getElementById("con1");
	var oB = document.getElementById("con2");
	var oC = document.getElementById("con3");
	var oD = document.getElementById("con4");
	var oE = document.getElementById("con5");
	var oF = document.getElementById("con6");
	oA.className = "myHide";oA1.innerHTML = "2009年8月";
	oB.className = "myHide";oB1.innerHTML = "2010年8月";
	oC.className = "myHide";oC1.innerHTML = "2011年8月";
	oD.className = "myHide";oD1.innerHTML = "2015年7/8月";
	oE.className = "myHide";oE1.innerHTML = "2017年1/8/10月";
	if(oF.className == "myHide"){
		oF.className = "myShow";
		oF1.innerHTML = "<img src='img/right.jpg' style='height:28px;'>2018年8月";
	//当点击对象的相应板块隐藏时，使其显示，而其他的隐藏，并且点击的日期有箭头指向
	}
	else{
		oF.className = "myHide";
		oF1.innerHTML = "2018年8月";
		//如果点击的对象相应板块显示时，使其隐藏，并且取消点击的日期有箭头指向
	} 
}