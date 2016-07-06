var button = document.getElementById('menu');
var sidebar = document.getElementById('sidebar');

sidebar.style.width = sidebar.offsetWidth + "px";

var width = sidebar.style.width;

function toggle(){
	if(sidebar.style.width == width){
		sidebar.style.width = "0px";
	} else {
		sidebar.style.width = width;
	}
}

button.onclick = toggle;