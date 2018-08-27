import React from "react";

const mediumCard = props => (
  <section className="hero dark-translucent" id="PanelWrapper">
    <div className="hero-body">
      <div className="container" id="artistPanelContainer">
        <div className="columns">
          <div className="column is-one-fifth">
            <figure className="image is-3x3">
              <img
                className="is-rounded"
                id="artwork-card"
                src={props.artwork-image}
              />
            </figure>
          </div>
          <div className="column">
{/*             
              <p className="title is-3 artist-panel-text  has-text-white-ter" id="artistPanelTitle">
                {props.artistName}
              </p> */}
              <p className="subtitle is-5 artist-panel-text  has-text-grey-lighter">{props.phone}</p>
              <p className="subtitle is-5 artist-panel-text  has-text-grey-lighter">
                {props.categories}
              </p>
              <p className="subtitle is-6 artist-panel-bio has-text-grey-lighter">{props.bio}</p>
              <a className="subtitle is-5 artist-panel-text  link-color" href={props.websiteURL} target="_blank">Visit Website</a>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default mediumCard;

