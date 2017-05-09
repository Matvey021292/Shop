	$(function(){
		$('.carousel').carousel({
	  interval: false
	});
	$('.search').on('click',function(){
		$('.main-menu .navbar-form').slideToggle();
	});
	$('#elastislaide').elastislide();
	});
	$(window).load(function(){
		var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
		$('#carousel-sidebar img').each(function(){
			$(this).attr('width', carouselCaptionWidth);
		});
		$('#carousel-sidebar div.sidebar-carousel-captions').css('max-width', carouselCaptionWidth + 'px');
	}); 