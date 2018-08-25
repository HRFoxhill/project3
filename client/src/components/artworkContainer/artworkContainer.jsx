import React from "react";

//conatiner for all artwork panels
export const ArtworkContainer = props => (

  <section className="section">
    <div className="columns">
      {props.children}
    </div>
  </section>
);