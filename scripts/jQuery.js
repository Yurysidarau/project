$(document).ready(function(){


//sticky-nav
var waypoint = new Waypoint({
  element: document.getElementById('fitness-description'),
  handler: function(direction) {
  		if (direction=="down") {
  			$("nav").attr("id","sticky-nav");
  		} else {
  			$("nav").removeAttr("id");
  		}
	},
  	offset: 60 
	});

//buttons-click

$(".button-order").click(function(){
	$("html,body").animate({scrollTop: $("#how-to-order-section").offset().top},1000)
});

$(".button-more").click(function(){
	$("html,body").animate({scrollTop: $("#fitness-description").offset().top},1000)
});


//buttons-nav
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//animation

var waypoint = new Waypoint({
  element: document.getElementById('fitness-description'),
  handler: function(direction) {
  	$(".anim").addClass("animate__animated animate__pulse");
  	},
  	offset: 60 
	});

var waypoint = new Waypoint({
  element: document.getElementById('cities-section'),
  handler: function(direction) {
  	$(".animc").addClass("animate__animated animate__pulse");
  	},
  	offset: 60 
	});

var waypoint = new Waypoint({
  element: document.getElementById('how-to-order-section'),
  handler: function(direction) {
  	$("#phone-image-container").addClass("animate__animated animate__shakeX");
  	},
  	offset: 60 
	});

})
