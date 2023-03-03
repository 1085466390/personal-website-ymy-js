// JavaScript Document
// 图片自动滑动效果
function scorllLeft(){
	var speed = 20;//设置移动速度
	var index = document.getElementById("index");
	var index1 = document.getElementById("index1");
	var index2 = document.getElementById("index2");
	index2.innerHTML = index1.innerHTML;
	//将有照片的index1的全部照片复制到index2中，使最后一张照片和第一张照片无缝连接
	var myMar = setInterval(function(){
		if(index2.offsetWidth-index.offsetleft <= 0) index.scrollLeft -= index1.offsetWidth;
		//当index2的偏移量小于整个index的偏移量时，index的左坐标复位
	    else index.scrollLeft++;
		//否则index向左移动
	},speed);
	//每20ms调用一个index板块移动的function
}
