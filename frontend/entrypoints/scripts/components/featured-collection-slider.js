import { Splide } from "@splidejs/splide";

// JavaScript code for the custom web component
class FeaturedCollectionSlider extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        // Initialize the Splide slider
        const splide = new Splide(this, {
            perPage    : 4,
            breakpoints: {
                640: {
                    perPage: 1,
                },
            },
            perMove    : 1,
            pagination : false,
            arrows     : true,
            arrowPath  : 'm2.2742.9395 20 19.9999-20 20.0001-2.1149-2.115 17.8851-17.8851-17.8851-17.885 2.1149-2.1149z',
            classes    : {
              arrows: 'splide__arrows',
              arrow : 'splide__arrow prev-next-button',
              prev  : 'splide__arrow--prev prev-next-button--prev',
              next  : 'splide__arrow--next prev-next-button--next',
            }
        }).mount();

    }
}

customElements.define('featured-collection-slider', FeaturedCollectionSlider);
