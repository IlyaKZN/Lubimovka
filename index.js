document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
        focus    : 'center',
        perPage  : 2,
        trimSpace: false,
        arrows: true,
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'slider__button_direction_left',
            next  : 'slider__button_direction_right',
            pagination : 'slider',
            page      : 'slider__dot-button',
        },
    } ).mount();
} );