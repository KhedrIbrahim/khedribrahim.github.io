var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
    speed: 1000,
    loopFillGroupWithBlank: true,
    breakpoints: {
        1300: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        950: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    },
});

swiper.el.addEventListener('mouseenter', function() {
    swiper.autoplay.stop();
});

swiper.el.addEventListener('mouseleave', function() {
    swiper.autoplay.start();
});
