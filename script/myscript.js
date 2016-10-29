"use strict";
$(document).ready(function() {
	
	myLocation();
	
	var $educationHeader = $('#educate');
	var $windowHeight = $(window).height();
	var $docHeight = $(document).height();
	
    $("#contactForm").hide();
    $("#messageSend").hover(function(e) {
       $("#contactForm").fadeIn("slow").addClass("bg-5");
	});
	
	$("#contactme").mouseleave(function() {
		$("#contactForm").fadeOut();
	});
	
	function myLocation() {
		  var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: new google.maps.LatLng(41.0177, -91.9672), 
		  });

		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(41.0177, -91.9672), 
			map: map,
			title: 'Nawa Location'
		  });
		marker.setMap(map);
	};

	$(window).scroll(function() {
		/*animateMyPage();*/
	});
/*	
	function animateMyPage() {
		var windowTop = $(window).scrollTop();
		var topCoordinates = $educationHeader.offset().top;
		if(windowTop > (topCoordinates - ($windowHeight*0.75)){
			console.log("Here we go");
			$("#educate").slide("right");	
		};
	};*/
	

})();