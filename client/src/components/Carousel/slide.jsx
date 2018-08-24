import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slide = props => {
    let container = {
        height: 500
      };
      let images = {
        width: "100%",
        height: "auto"
      };
      let title = {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        color: "white",
        fontSize: 50,
        backgroundColor:"rgba(3, 3, 3, 0.507)",
        overflow:"hidden"
      };
  return (
    <div class="slide-container" style={container}>
      <h1 style={title}>{props.title}</h1>
      <img src={props.image} style={images}/>
      <p className="legend">{props.description}</p>
    </div>
  );
};

export default Slide;
