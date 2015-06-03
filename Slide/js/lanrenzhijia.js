$(document).ready(function(){


    /** Main Slider **/
    var timer;
    var slideCount = $('.thumbs li').length;
    var currSlide = $('.thumbs li').filter('.curr').index();
    var nextSlide = currSlide + 1;
    var fadeSpeed = 1000;
	

        currSlide=0;
    $('body').keydown(function (e) {
        var keyCode = e.keyCode;

        if(keyCode==39) {

            currSlide = currSlide + 1 < slideCount ? currSlide + 1 : 0;

            $('.slide-item').fadeOut(fadeSpeed);
            $('.slide-item, .thumbs li').removeClass('curr');

            $('.slide-item').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);
            $('.thumbs li').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);

    } else {
    
            currSlide = currSlide - 1 < 0 ? slideCount-1 : currSlide - 1;
            console.log(currSlide);

            $('.slide-item').fadeOut(fadeSpeed);
            $('.slide-item, .thumbs li').removeClass('curr');

            $('.slide-item').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);
            $('.thumbs li').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);
    
    
    }


    });

});
