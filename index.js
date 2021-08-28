document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
        type   : 'loop',
        focus    : 'center',
        perPage  : 2,
        trimSpace: false,
        arrows: true,
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
        },
    } ).mount();
} );