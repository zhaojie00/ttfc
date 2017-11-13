// JavaScript Document
function move(obj,attr,target,speed,fn){//对象,属性,目标,速度
		speed = (parseInt(getStyle(obj,attr)) < target) ? speed:-speed;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var newSs = parseInt(getStyle(obj,attr)) + speed;
			if((Math.abs(speed)) >= (Math.abs(target-newSs))){
				obj.style[attr] = target + "px";
				clearInterval(obj.timer);
				if(fn){
					fn()
				  }
				}else{
				obj.style[attr] = newSs + "px";
				}
				
		},100)}
	function getStyle(obj,attr){return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];}