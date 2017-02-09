$(document).ready(function(){

	var scrollheight = document.body.scrollHeight // height of entire document
	var windowheight = window.innerHeight // height of browser window

	function parallaxbubbles(){
	  var scrolltop = $(window).scrollTop();
	  var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100;	
	  $('.shark').css('left', -100 + scrollamount + '%');
	  $('.seahorse').css('top', -scrolltop * .2 + 'px');
	  $('.turtle').css('top', -scrolltop * .5 + 'px');
	 	$('.bubble').css('top', -scrolltop * .8 + 'px');
	  $('.bubble2').css('top', -scrolltop * .9 + 'px');
	}
	 
	$(window).scroll(function(e){ 
	  parallaxbubbles();
	});

});