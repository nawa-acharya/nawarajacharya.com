"use strict";
$(document).ready(function() {
	myLocation();
	
    $("#contactForm").hide();
    $("#messageSend").hover(function(e) {
       $("#contactForm").fadeIn("slow")
	   .addClass("bg-5");
	});
	
	$("#contactme").mouseleave(function() {
		$("#contactForm").fadeOut();
	});
	

	$("#educate").mouseenter(function() {
		$("#educate").effect('slide', 'right');
	});
	
	function myLocation() {
		  var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: new google.maps.LatLng(41.0177, -91.9672), 
		  });

		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(41.0177, -91.9672), 
			map: map,
			title: 'Nawa Location'
		  });
		marker.setMap(map);
	}

})();