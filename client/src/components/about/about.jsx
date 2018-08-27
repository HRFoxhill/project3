import React from "react";
import { Parallax } from 'react-scroll-parallax';

const About = props => {
  return (
    <section className="hero is-primary is-medium parallax">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
          <Parallax
        offsetYMax={-50}
        offsetYMin={-80}
        slowerScrollRate
    >
            <div className="column about-container1 box" id="card-1">
              <h1 class="about-title">A one-of-a-kind community</h1>
              <h2>
                ArtSpose is a local online marketplace where artists display
                their art by medium and patrons view art.
              </h2>
            </div>
            </Parallax>
            <Parallax
        offsetYMax={-20}
        offsetYMin={20}
        slowerScrollRate
    >
            <div className="column about-container2 box" id="card-2">
              <h1 class="about-title">Support local creators</h1>
              <h2>
                There is no ArtSpose warehouse - just local artists showing the
                things they love. And local patrons and artists searching for
                art by medium to view our artists' work.
              </h2>
            </div>
            </Parallax>
            <Parallax
        offsetYMax={-60}
        offsetYMin={-30}
        slowerScrollRate={false}
    >
            <div className="column about-container1 box" id="card-3">
              <h1 class="about-title">Peace of mind</h1>
              <h2>
                Supporting our artists and providing access to their art for
                patrons and other artists in our community is our top priority.
              </h2>
            </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
