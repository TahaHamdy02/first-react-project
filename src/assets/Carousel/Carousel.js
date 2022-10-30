import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            slideBy: 1
        },
        600: {
            items: 2, slideBy: 2
        },
        1000: {
            items: 3,
            slideBy: 3
        }
    },
    autoplayTimeout: 10000,
    autoplayHoverPause: true
};

const Carousel = (props) => {
    return (
        <OwlCarousel className="owl-theme" {...options}>
            {props.children}
        </OwlCarousel>
    )
}

export default Carousel