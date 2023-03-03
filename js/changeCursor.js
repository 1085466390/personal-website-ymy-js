// JavaScript Document

//改变鼠标样式功能
        var change = document.getElementById("bar1");
		var change1 = document.getElementById("bar2");
		var change2 = document.getElementById("bar3");
		var change3 = document.getElementById("bar4");
		//取出需要改变鼠标样式的对象
		change1.onmouseover = function(){
			this.style.cursor = 'pointer';
		}
		change2.onmouseover = function(){
			this.style.cursor = 'pointer';
		}
		change.onmouseover = function(){
			this.style.cursor = 'pointer';
		}
		change3.onmouseover = function(){
			this.style.cursor = 'pointer';
		}
		//当鼠标移到该对象上时，改变鼠标样式为手形