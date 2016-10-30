"use strict";
$(document).ready(function() {
	
	myLocation();
	
	var $windowHeight = $(window).height();
	var $docHeight = $(document).height();	
	
	//show hide message field on hover
    $("#contactForm").hide();
    $("#messageSend").hover(function(e) {
       $("#contactForm").fadeIn("slow").addClass("bg-5");
	});
	
	$("#contactme").mouseleave(function() {
		$("#contactForm").fadeOut();
	});
	
	//show google map with marker
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

	function animations() {
		//for animations 
		var $window = $(window);
		$window.on('scroll resize', myAnimation());
		$window.trigger('scroll');

		function myAnimation() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);

			var $element = $('#careerNote');
			var element_height = $element.outerHeight();
			var element_top_positions = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $(this).show('slide', '{direction: "right"}', 1000);
				console.log("Check")
			};
		};
	}
	
})();