import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slide = props => {
    let container = {
        height: 600
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
        backgroundColor:"rgba(70, 70, 70, 0.2)",
        overflow:"hidden"
      };
      let description={
        backgroundColor:"rgba(80,80,80,0.9)"
      }
  return (
    <div class="slide-container" style={container}>
      <h1 style={title}>{props.title}</h1>
      <img src={props.image} style={images}/>
      <p className="legend" style={description}>{props.description}</p>
    </div>
  );
};

export default Slide;
