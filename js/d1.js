//当前文档读完后再来调用“我”
$(document).ready(function() {
	$("#box01-car").mouseenter(function() {
		$("#car-img").attr("src", "img/d1/car_no.png");
		$("#car-text").css("color", "orangered");
		$("#box01-car").css("background", "white");
		$("#car-info").slideDown(100);
	});
	$("#box-01-info-right").mouseleave(function() {
		$("#car-img").attr("src", "img/d1/car_yes.png");
		$("#car-text").css("color", "grey");
		$("#box01-car").css("background", "rgba(255,255,255,0.1)");
		$("#car-info").slideUp(100);
	});

	$("#loginbtn").click(function() {
		tologin();
	});

	function tologin() {
		window.location.href = "bigrice.html";
	}
	$("#registerbtn").click(function() {
		tologin1();
	});

	function tologin1() {
		window.location.href = "logintest.html";
	}
});