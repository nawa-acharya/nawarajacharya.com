"use strict";
$(document).ready(function() {
	//image loader 
	$(window).load(function() {
		$("#loader").fadeOut("slow");
	});

	myLocation();

	// show hide message field on hover
	$("#contactForm").hide();
	$("#messageSend").hover(function(e) {
		$("#contactForm").fadeIn("slow").addClass("bg-5");
	});

	$("#contactme").mouseleave(function() {
		$("#contactForm").fadeOut();
	});

	// show google map with marker
	function myLocation() {
		var map = new google.maps.Map(document
				.getElementById('map'), {
			zoom : 12,
			center : new google.maps.LatLng(41.0177, -91.9672),
		});

		var marker = new google.maps.Marker(
				{
					position : new google.maps.LatLng(41.0177,
							-91.9672),
					map : map,
					title : 'Nawa Location'
				});
		marker.setMap(map);
	};					

	// smooth scrolling on click to #
	$(document).on('click', 'a', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $($.attr(this, 'href')).offset().top
		}, 500);
	});

	// download resume on button click
	$("#fileDownload").click(function() {
		window.open('files/ACHARYA_NAWA-Resume.docx');
	});
	
	//slide div
	$(document).scroll(function() {
		slideToRight();
	});
					
		
					//slide div
/*					$(document).scroll(function() {
							var window_height = $window.height();
							var window_top_position = $window.scrollTop();
							var window_bottom_position = (window_top_position + window_height);

							var $element = $('#careerNote');
							var element_height = $element.outerHeight();
							var element_top_position = $element.offset().top;
							var element_bottom_position = (element_top_position + element_height);

							// check to see if this current container is within
							// viewport
							if ((element_bottom_position >= window_top_position)
									&& (element_top_position <= window_bottom_position)) {
								$('#careerNote').fadeIn('slow');
								});
								scrollStatus = 'scrolled';
						};
					});*/

/*					animations();

					function animations() {
						// for animations
						var $window = $(window);
						var scrollStatus = 'top';
						$window.on('scroll resize', myAnimation);
						$window.trigger('scroll');

						function myAnimation() {
							var window_height = $window.height();
							var window_top_position = $window.scrollTop();
							var window_bottom_position = (window_top_position + window_height);

							var $element = $('#careerNote');
							var element_height = $element.outerHeight();
							var element_top_position = $element.offset().top;
							var element_bottom_position = (element_top_position + element_height);

							// check to see if this current container is within
							// viewport
							if ((element_bottom_position >= window_top_position)
									&& (element_top_position <= window_bottom_position)
									&& scrollStatus === 'top') {
								$element.animate({
									right : '300px'
								});
								scrollStatus = 'scrolled';
							}
							;
						}
						;
					}*/
	var status = 'top';
	
	function slideToRight() {
		var window_height = $(window).height();
		console.log("Window height: " + window_height);
		var win_top_pos = $(window).scrollTop();
		console.log("Window top pos: " + win_top_pos);
		var win_btm_pos = window_height + win_top_pos;
		console.log("Bottom: " + win_btm_pos);
		var element_pos = $("#careerNote").offset().top;
		console.log("Career note height: " + element_pos);
		if((element_pos - win_btm_pos) < 100 && status === "top"){
			console.log("******************************************");
			status = "bottom";
		}
	}
});

