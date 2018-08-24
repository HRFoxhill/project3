import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./slide";

class carousel extends Component {
  render() {
    let carousel = {
      position: "relative"
    };

    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        style={carousel}
        showStatus={false}
      >
        <Slide
          image={this.props.img1}
          title={this.props.title1}
          description={this.props.description1}
        />
        <Slide
          image={this.props.img2}
          title={this.props.title2}
          description={this.props.description2}
        />
        <Slide
          image={this.props.img3}
          title={this.props.title3}
          description={this.props.description3}
        />
      </Carousel>
    );
  }
}

export default carousel;
