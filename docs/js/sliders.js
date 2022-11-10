'use strict';

// Destination slider
const destinationSwiper = function () {
    let destinationSwiperWrapper = document.querySelector('.destination__swiper-wrapper');
    let destinationSelector = destinationSwiperWrapper.querySelector('.swiper');
    const destinationSwiper = new Swiper(destinationSelector, {
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
            768: {
                spaceBetween: 40,
            },
            860: {
                spaceBetween: 60,
            },
            1340: {
                spaceBetween: 75,
            }
        }
    });
}();

// Package slider
const packageSwiper = function () {
    let packageSwiperWrapper = document.querySelector('.package__swiper-wrapper');
    let packageSelector = packageSwiperWrapper.querySelector('.swiper');
    let packagePrev = packageSwiperWrapper.querySelector('.swiper-button-prev');
    let packageNext = packageSwiperWrapper.querySelector('.swiper-button-next');
    const packageSwiper = new Swiper(packageSelector, {
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
            768: {
                spaceBetween: 40,
            },
            860: {
                spaceBetween: 50,
            },
            1340: {
                spaceBetween: 60,
            }
        },
        navigation: {
            prevEl: packagePrev,
            nextEl: packageNext,
        },
    })
}();

// Popular slider
const popularSwiper = function () {
    let popularSwiperWrapper = document.querySelector('.popular__swiper-wrapper');
    let popularSelector = popularSwiperWrapper.querySelector('.swiper');
    let popularPrev = popularSwiperWrapper.querySelector('.swiper-button-prev');
    let popularNext = popularSwiperWrapper.querySelector('.swiper-button-next');
    const popularSwiper = new Swiper(popularSelector, {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            1140: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        navigation: {
            prevEl: popularPrev,
            nextEl: popularNext,
        },
    })
}();