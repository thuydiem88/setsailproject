$('.owl-carousel.owl-carousel-package').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fade',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.owl-carousel.owl-carousel-review').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fade',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.owl-carousel.owl-carousel-blog').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    // animateOut: 'fade',
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1
        }
    }
})