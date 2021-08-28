document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
        type   : 'loop',
        focus    : 'center',
        perPage  : 2,
        trimSpace: false,
        arrows: false,
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows',
            arrow : 'splide__arrow',
            prev  : 'slider__button_direction_left splide__arrow slider__button',
            next  : 'slider__button_direction_right slider__button splide__arrow',
        },
    } ).mount();
} );