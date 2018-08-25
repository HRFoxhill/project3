import React from "react";
// import 'bulma/css/bulma.css';

const artistPanel = props => (
  <section className="hero dark-translucent" id="PanelWrapper">
    <div className="hero-body">
      <div className="container" id="artistPanelContainer">
        <div className="columns">
          <div className="column is-one-fifth">
            <figure className="image is-3x3">
              <img
                className="is-rounded"
                id="artistPanelImage"
                src={props.profilePhoto}
              />
            </figure>
          </div>
          <div className="column">
            
              <p className="title is-3 artist-panel-text  has-text-white-ter" id="artistPanelTitle">
                {props.artistName}
              </p>
              <p className="subtitle is-5 artist-panel-text  has-text-grey-lighter">
                {props.websiteURL}
              </p>
              <p className="subtitle is-5 artist-panel-text  has-text-grey-lighter">{props.phone}</p>
              <p className="subtitle is-5 artist-panel-text  has-text-grey-lighter">
                {props.categories}
              </p>
              <p className="subtitle is-6 artist-panel-bio has-text-grey-lighter">{props.bio}</p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default artistPanel;

{
  /* <section className="hero is-medium is-primary is-bold" id="PanelWrapper">
<div className="hero-body">
    <div className="container">
        <div className="columns">
            <div className="column is-centered">
                <figure className="image is-2x3">
                    <img className="is-rounded" id="artistPanelImage" src={props.profilePhoto}/>
                </figure>
            </div>
            <div className="column is-three-quarters is-centered" id="artistPanelContainer">
                <div className="tile is-ancestor">
                    <div className="tile is-parent" id="artistPanelBox">
                        <article className="tile is-child notification is-primary">
                            <h1 className="title" id="artistPanelTitle">
                                {props.artistName}
                            </h1>
                            <h2 className="subtitle" id="artistPanelSubtitle">
                                {props.bio}
                            </h2>
                            <h2 className="subtitle" id="artistPanelSubtitle">
                                {props.websiteURL}
                            </h2>
                            <h2 className="subtitle" id="artistPanelSubtitle">
                                {props.phone}
                            </h2>
                            <h2 className="subtitle" id="artistPanelSubtitle">
                                {props.categories}
                            </h2>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */
}
