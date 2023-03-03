// JavaScript Document

//留言板功能
function context1(){
	var oTime = new Date();
	//记录调用该函数的本地时间
	var name = form1.name.value;
	var context = form1.Meboard.value;
	var content = document.getElementById("context");
	//提取留言者姓名以及留言内容
	var innertext = oTime.getFullYear()+"年"+(oTime.getMonth()+1)+"月"+ oTime.getDate()+"日"+"|"+name+"|"+context;
	//显示留言的模式
	function saveData(){
		var aData = new Array(innertext);
		localStorage.setItem(oTime,aData);
	}	
	//在localStorage中创建名为oTime，即当前时间（使对象名永远不重复），值为留言模式内容
	function writeData(){
		content.innerHTML = "<p>留言：</p>";
	for(var i=0;i<localStorage.length;i++){
		data = localStorage.getItem(localStorage.key(i)).split("|");
		var con = document.createElement("con");
		var oText = document.createTextNode(data[0]+"留言信息:"+data[1]+"说:"+data[2]);
		con.appendChild(oText);
		content.appendChild(con);
		}
	}
	//将localStorage中所有的留言信息全部打在网页上
	if(name==null || content==null || name=="" || content=="") {
	    alert("不能为空");return;
		}else{
		saveData();
		writeData();
	    form1.name.value = null;
	    form1.Meboard.value = null; 
	}
	//设置留言者姓名以及留言内容不能为空
}

function context2(){
	var content = document.getElementById("context");
	localStorage.clear();
	//清空之前储存的所有留言内容
	content.innerHTML = "<p>留言：</p>"
}
//当dom结构加载完成后，调用函数
window.onload = function(){
	var content = document.getElementById("context");
	//调取本地储存的storage所有留言信息并打在留言板上
	function writeData(){
	for(var i=0;i<localStorage.length;i++){
		data = localStorage.getItem(localStorage.key(i)).split("|");
		var con = document.createElement("con");
		var oText = document.createTextNode(data[0]+"留言信息:"+data[1]+"说:"+data[2]);
		con.appendChild(oText);
		content.appendChild(con);
		}
	}
	writeData();
}