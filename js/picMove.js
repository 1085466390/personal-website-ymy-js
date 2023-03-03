// JavaScript Document

//照片流效果功能

	var oLi = document.getElementsByTagName("li");
	var iSpeed = 3;

	var oUniver1 = document.getElementById("univer1");
	var oUl1 = document.getElementsByTagName("ul")[1];
	var oLi1 = new Array();
	for(var i=4,k=0;i<9;i++,k++) oLi1[k] = oLi[i];
	var timer1 = null;
	oUl1.style.width = oLi1.length*oLi1[0].offsetWidth + "px";
	
	var oHigh1 = document.getElementById("high1");
	var oUl2 = document.getElementsByTagName("ul")[2];
	var oLi2 = new Array();
	for(var i=9,k=0;i<15;i++,k++) oLi2[k] = oLi[i];
	var timer2 = null;
	oUl2.style.height = oLi2.length*oLi2[0].offsetHeight + "px";
	
	
	var oHome1 = document.getElementById("home1");
	var oUl3 = document.getElementsByTagName("ul")[3];
	var oLi3 = new Array();
	for(var i=15,k=0;i<20;i++,k++) oLi3[k] = oLi[i];
	var timer3 = null;
	oUl3.style.width = oLi3.length*oLi3[0].offsetWidth + "px";
	
	//重庆师范大学照片流
	function fnMove1(){
		if (oUl1.offsetLeft<-2350) oUl1.style.left = 0 + "px";
		//当整个板块全部移完后，重置照片的位置
		oUl1.style.left = oUl1.offsetLeft - iSpeed + "px";
		//每次向左移动3px
	}
	oUniver1.onmouseout = function(){
		clearInterval(timer1);
	}
	//当鼠标移除时，照片移动效果停止
	oUniver1.onmouseover = function(){
		timer1 = setInterval(fnMove1,30);
	}
	//当鼠标覆盖到箭头上时，每30ms调用一次照片移动的function
	
	//我的高中照片流
	function fnMove2(){
		if(oUl2.offsetTop<-1740) oUl2.style.top = 0 + "px";
		//当整个板块全部移完后，重置照片的位置
		oUl2.style.top = oUl2.offsetTop - iSpeed + "px";
		//每次向上移动3px
	}
	oHigh1.onmouseout = function(){
		clearInterval(timer2);
	//当鼠标移除时，照片移动效果停止		
		}
	oHigh1.onmouseover = function(){
		timer2 = setInterval(fnMove2,30);
	}
	//当鼠标覆盖到箭头上时，每30ms调用一次照片移动的function
	
	//我的家乡照片流
	function fnMove3(){
		if(oUl3.offsetLeft<-1740) oUl3.style.left = 0 + "px";
		//当整个板块全部移完后，重置照片的位置
		oUl3.style.left = oUl3.offsetLeft - iSpeed + "px";
		//每次向左移动3px
	}
	oHome1.onmouseout = function(){
		clearInterval(timer3);
	//当鼠标移除时，照片移动效果停止
		}
	oHome1.onmouseover = function(){
		timer3 = setInterval(fnMove3,30);
	}
	//当鼠标覆盖到箭头上时，每30ms调用一次照片移动的function