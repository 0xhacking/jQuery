$(document).ready(function(){


    /** Main Slider **/
    var timer;
    var slideCount = $('.thumbs li').length;
    var currSlide = $('.thumbs li').filter('.curr').index();
    var nextSlide = currSlide + 1;
    var fadeSpeed = 1000;

    startTimer();
  //Start slides timer functions
    function startTimer() {
        timer = setInterval(function () {
            //$('.slide-item').eq(currSlide).fadeOut(fadeSpeed);
            $('.slide-item, .thumbs li').removeClass('curr');

            var offset  =($(".slide-item").eq(nextSlide).width())*-1
$(".slide-item").animate({
			left: offset
		}, "slow", function() {
            $('.slide-item').eq(nextSlide).addClass('curr').css("left","0px").fadeIn(fadeSpeed);
		})
            $('.thumbs li').eq(nextSlide).addClass('curr');

            currSlide = nextSlide;
            nextSlide = currSlide + 1 < slideCount ? currSlide + 1 : 0;

        }, 6000);
    }
        currSlide=0;
    $('body').keydown(function (e) {
        var keyCode = e.keyCode;

        if(keyCode==39) {

            currSlide = currSlide + 1 < slideCount ? currSlide + 1 : 0;

            $('.slide-item, .thumbs li').removeClass('curr');

            var offset  =($(".slide-item").eq(currSlide).width())*-1
$(".slide-item").animate({
			left: offset
		}, "slow", function() {
            console.log(currSlide);
            $('.slide-item').eq(currSlide).addClass('curr').css("left","0px").fadeIn(fadeSpeed);
		})
            $('.thumbs li').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);

    } else {
    
            currSlide = currSlide - 1 < 0 ? slideCount-1 : currSlide - 1;

            $('.slide-item').fadeOut(fadeSpeed);
            //$('.slide-item').hide();
            $('.slide-item, .thumbs li').removeClass('curr');

            var offset  = ($(".slide-item").eq(currSlide).width()) * -1
            $('.slide-item').eq(currSlide).addClass('curr').css("left",offset).fadeIn(fadeSpeed);
$(".slide-item").animate({
            left:"0px",
		}, "slow", function() {
           // console.log(currSlide);
		})
            //$('.slide-item').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);
            $('.thumbs li').eq(currSlide).addClass('curr').fadeIn(fadeSpeed);
    
    
    }


    });

});
