import React from "react";

//conatiner for all artwork panels
export const ArtworkContainer = props => (

  <section className="section transparent-background">
    <div className="columns is-multiline">
      {props.children}
    </div>
  </section>
);