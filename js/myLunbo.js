/**********轮播效果实现函数**************/
function myLunbo(oUl1,aLib,oRig,oLef,on,long,obox,delay){//移动对象，圆圈选择，右侧按钮切图，左侧按钮，圆圈class，图片数组长度，控制对象，延时
	  var num =0;
	  var timer;		
	//自动轮播效果实现
	Play();
	function autoPlay(){//自动轮播效果实现
		if(num<long-1){
			num++;
			var tag = 1;
		}else{
			num=0;
			tag=0;
		}
		for(var i=0;i<long-1;i++){
			for(var j=0;j<long;j++){//选择圆圈效果
				aLib[j].className = '';
			}
				aLib[num].className = 'on';
			if(tag){
				oUl1.style.left = -num*687 +"px";
			}else{
				oUl1.style.left = 0 +"px";
			}
		}
	}//function autoPlay
	
	oRig.onclick = function(){//
		//clearInterval(timer);
		autoPlay();
	}//oRig.onclick
	
	oLef.onclick = function(){
		//clearInterval(timer);
		if(num>0){
			num--;
			var tag = 1;
		}else{
			num=long-1;
			tag=0;
		}
		for(var i=0;i<long-1;i++){
			for(var j=0;j<long;j++){//选择圆圈效果
				aLib[j].className = '';
			}
				aLib[num].className = 'on';
				if(tag){
					oUl1.style.left = -num*687 +"px";
				}else{
					oUl1.style.left = -2478+"px";
				}
		}
	}//oLef.onclick
	//点击圆圈播放对应图片
	for(var k=0;k<long;k++){//点击圆圈播放对应图片
		aLib[k].index = k;
		aLib[k].onclick = function(){
			//clearInterval(timer);
			i=this.index;//获取当前对象的index并赋值给i
			oUl1.style.left = -i*687 +"px";
			for(var j=0;j<long;j++){
				aLib[j].className = '';
				}
				aLib[i].className = 'on';
		}
	}//for
	obox.onmouseover = Stop;
	obox.onmouseout = Play;
/*	oLef.onmouseover = function(){stop();}
	oLef.onmouseout = function(){Play();}
	aLib.onmouseover = function(){stop();}
	aLib.onmouseout = function(){Play();}
*/
	function Stop(){
		clearInterval(timer);
	}
	function Play(){
		timer = setInterval(autoPlay,delay);
	}

}//myLunbo