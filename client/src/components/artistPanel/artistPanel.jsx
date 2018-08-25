import React from "react";
// import 'bulma/css/bulma.css';


const artistPanel = props => (
    <section className="hero is-medium is-primary is-bold" id="PanelWrapper">
        <div className="hero-body">
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <figure className="image is-2x3">
                            <img className="is-rounded" id="artistPanelImage" src={props.profilePhoto}/>
                        </figure>
                    </div>
                    <div className="level-right">
                        <div class="container" id="artist-info-container">
                                    <p className="title is-3 is-center" id="artistPanelTitle">
                                        {props.artistName}
                                    </p>
                                    <p className="subtitle is-5 artist-panel-text">
                                        {props.websiteURL}
                                    </p>
                                    <p className="subtitle is-5 artist-panel-text">
                                        {props.phone}
                                    </p>
                                    <p className="subtitle is-5 artist-panel-text">
                                        {props.categories}
                                    </p>
                                    <div>
                                        <p className="subtitle is-5 artist-panel-bio">
                                            {props.bio}
                                        </p>
                                    </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default artistPanel;

{/* <section className="hero is-medium is-primary is-bold" id="PanelWrapper">
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
</section> */}
