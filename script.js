$(function() {

	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;


	var $slider = $('#carousel');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');


	setInterval(function() {
        if (($slideContainer).not(':animated')) {
		$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
			 currentSlide++;
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.animate({'margin-left' : 0}, animationSpeed);
				}
		});
	}}, pause);

    $('.next').click(function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.animate({'margin-left' : 0}, animationSpeed);
        }
        else {
            $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed);
        }
    });

    $('.prev').click(function() {
        if (currentSlide === 1) {
            currentSlide = $slides.length;
            console.log(currentSlide);
            $slideContainer.animate({'margin-left' : -2160}, animationSpeed);
        }
        else {
            currentSlide--;
            $slideContainer.animate({'margin-left': '+=' + width}, animationSpeed);
        }
    });





 
});