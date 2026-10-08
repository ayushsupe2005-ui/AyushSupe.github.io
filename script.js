var script = document.createElement('script');
script.src = 'jquery-4.0.0.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);

function home(){
	$(function(){
		$("#titleDiv").load("home.html");
	});
}

function threeD_printing(){
	$(function(){
		$("#titleDiv").load("3d_printing.html");
	});
}