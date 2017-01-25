"use strict";

$(function() { 
		function fadeInOut(projectSelector) { 
		var projectNameSelector = $(projectSelector.find('.project-name')[0]); 
		projectSelector.hover(function(){ // on hover
			projectNameSelector.animate({
				opacity:1.0
			},75);;
			projectSelector.animate({
				'box-shadow': 'inset 1000px 1000px rgba(0,0,0,0.6)'
			},75);
			// projectNameSelector.css('opacity', '1.0') //changes css
			// projectSelector.css('box-shadow', 'inset 1000px 1000px rgba(0,0,0,1.0)');
		}, // closes on hover
		function(){ //on off hover
			projectNameSelector.animate({
				opacity:0.0
			},75);
			projectSelector.animate({
				'box-shadow': 'inset 1000px 1000px rgba(0,0,0,0.0)'
			},75);
			// projectNameSelector.css('opacity', '')
			// projectSelector.css('box-shadow', 'inset 1000px 1000px rgba(0,0,0,0.0)');
		}); //closes off hover
	} //closes fadeInOut
	$('.project').each(function(i, p) { //loops through all projects
		fadeInOut($(p))
	})
});

$(function($){
        var addToAll = true;
        var gallery = true;
        var titlePosition = 'outside';
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });
$.noConflict();