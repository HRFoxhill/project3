import React from "react";
import { Carousel } from "react-responsive-carousel";
import Isis from "../../images/DickBrewerArt/17Isisframe.jpg"
import Luxor from "../../images/DickBrewerArt/11LuxorLuauframe.jpg"
import Eldorado from "../../images/DickBrewerArt/5EldoradoBlvdframe.jpg"

export default () => (
  <Carousel autoPlay>
    <div>
      <img src= {Isis} />
      <p className="legend"> Isis </p>
    </div>
    <div>
      <img src= {Luxor} />
      <p className="legend"> Luxor Luau</p>
    </div>
    <div>
      <img src= {Eldorado} />
      <p className="legend"> Eldorado Blvd</p>
    </div>
  </Carousel>
);