import React from "react";

//conatiner for all artwork panels
export const ArtworkContainer = props => (

  <section className="section transparent-background">
    <div className="columns">
      {props.children}
    </div>
  </section>
);