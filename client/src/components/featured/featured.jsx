import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";

const FeaturedCarousel = () => {     
        return (
                <div>
                <Carousel />
                </div>
         );   
  };
 
// ReactDOM.render(<FeaturedCarousel />, document.querySelector('.featured-carousel'));
 
export default FeaturedCarousel;