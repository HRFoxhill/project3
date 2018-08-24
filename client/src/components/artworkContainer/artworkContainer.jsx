import React from "react";

//conatiner for all artwork panels
export const ArtworkContainer = props => (

  <section className="section">
    <div class="columns">
      {props.children}
    </div>
  </section>
);