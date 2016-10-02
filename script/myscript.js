"use strict";
$(document).ready(function() {
    $("#contactForm").hide();
    $("#messageSend").hover(function(e) {
       $("#contactForm").fadeIn("slow")
	   .addClass("bg-5");
	});
	
	$("#contactme").mouseleave(function() {
		$("#contactForm").fadeOut();
	});
	
	$(window).scroll(function() {
		
	});
});