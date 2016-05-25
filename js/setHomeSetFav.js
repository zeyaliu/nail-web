// JavaScript Document
window.onload = function(){
	var oDiv= document.getElementById("logo_left");
	oDiv.onmouseover = function(){
		startMove(0);
		starttou(0.6);
		}
	oDiv.onmouseout = function(){
		startMove(-270);
		starttou(1);
		}
		
		var container = document.getElementById('container');
        var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 3;
            var animated = false;
            var interval = 3000;
            var timer4;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = list.offsetLeft + offset;

                var go = function (){
                    if ( (speed > 0 && list.offsetLeft < left) || (speed < 0 && list.offsetLeft > left)) {
                        list.style.left = list.offsetLeft + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -300 * len + 'px';
                        }
                        if(left<(-300 * len)) {
                            list.style.left = '-300px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer4 = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer4);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-300);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(300);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -300 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();

        }
		
		
	//main menu
var timer=null;
function startMove(position){	
	clearInterval(timer);
	var oDiv= document.getElementById("logo_left");	
	timer=setInterval(function(){
		//var speed=0;
		var speed=(position-oDiv.offsetTop)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		/*if(oDiv.offsetTop>position){speed=-10}
		else{speed=10}*/
		if(oDiv.offsetTop==position){
			clearInterval(timer);
		}else{
			oDiv.style.top=oDiv.offsetTop +speed+"px";
		}		
		},30)
}

var alpha=1;
var timer2=null;
function starttou(position){	
	clearInterval(timer2);
	var oDiv= document.getElementById("logo_lbottom");	
	if(alpha>position){
		oDiv.style.opacity=0.6;
		alpha=0.6;}
	else{//oDiv.style.opacity=1
	timer2=setInterval(function(){
		//var speed=0;
		//if(alpha>position){speed=-0.1}
		//else{
		var speed=0.025;
			//}
		if(alpha==position){
			clearInterval(timer2);
		}else{
			alpha+=speed;
			oDiv.style.opacity=alpha;
		}		
		},30)
		}
}//main menu结束

//search bar
var timer3=null;
var alpha2=4;
function startAlpha(target){
	clearInterval(timer3);
	var searchText=document.getElementById("logo_right");
	timer3=setInterval(function(){
		var speed=0;
		if(alpha2<target){speed=1}
		else{speed=-1}
		if(alpha2==target){clearInterval(timer3);timer3=null;}
		else{
			alpha2+=speed;
			searchText.style.opacity=alpha2/10;}
	},30)	
}
//search bar结束

