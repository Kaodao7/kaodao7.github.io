$(function () {

    $('.header__btn').on('click' , function () {
        $('.rightside').removeClass('rightside__btn--close');
    });

    $('.rightside__btn').on('click' , function () {
        $('.rightside').addClass('rightside__btn--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoPlay: true,
    });

    $('.contact__slider').slick({
        dots: true,
        arrows: false,
       slidesToShow:10,
       slidesToScroll:10,
     
    });

    $('.article-slider-box').slick({
       
        prevArrow: '<button type="button" class="article__slider-arrow article__slider-arrowLeft "><img src="assets/images/arrow-left.svg" alt="" ></button>',
        nextArrow: '<button type="button" class="article__slider-arrow article__slider-arrowRight"><img src="assets/images/arrow-right.svg" alt="" ></button>',
    
    });

    

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.Living'
        }
    });

})