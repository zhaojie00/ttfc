window.onload = function(){
	var obox = document.getElementById('box');
	var oUl1 = document.getElementById('ul1');
	var aLia = document.getElementById('ul1').getElementsByTagName('li');
	var aLib = document.getElementById('ul2').getElementsByTagName('li');
	var oLef = document.getElementById('ipt1');
	var oRig = document.getElementById('ipt2');
	var num =0;
	var delay = 2500;
	var timer;
	var on;
	var long = aLia.length;
	myLunbo(oUl1,aLib,oRig,oLef,on,long,obox,delay);//移动对象，圆圈选择，右侧按钮切图，左侧按钮，圆圈class，图片数组长度，控制对象，延时

	var oTab = document.getElementById('tab');
	var oCon = document.getElementById('con');
	var aLic = oTab.getElementsByTagName('li');
	var aDiv = oCon.getElementsByTagName('div');
	var l = aLic.length;
	var i=0;

	for (i=0;i<l;i++){
			aLic[i].index=i;
			aLic[i].onmouseover = function(){
				clearInterval(timer);
				for(var j=0;j<l;j++){
					aLic[j].className = '';
					aDiv[j].className = '';
					}
					aLic[this.index].className = 'tit';
					aDiv[this.index].className = 'fei';
					aDiv[this.index].style.opacity= '0';
					fn(this.index);	
				}
		}
	function fn(v){//透明度淡出过渡函数
				var b= v;
				var a=0;
				clearInterval(timer);
				var timer = setInterval(function(){				
					a+=1;
					if(a<100){		
						aDiv[b].style.opacity= a/100;
					}else{
						aDiv[b].style.opacity= 1;
						clearInterval(timer);
					}
				},10);
			}

	var Oce = document.getElementById('ce');
	var oLi = Oce.getElementsByTagName('li');

	var oDd = Oce.getElementsByTagName('dd');
	for(var i=0;i<4;i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){move(oDd[this.index],'left',-135,30);}//this.index获取当前对象的index属性
		oLi[i].onmouseout = function(){move(oDd[this.index],'left',60,30);}
		
		}





}