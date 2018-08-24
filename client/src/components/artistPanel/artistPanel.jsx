import React from "react";
// import 'bulma/css/bulma.css';


const artistPanel = props => (
    <section className="hero is-medium is-info is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column is-centered">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={props.profilePhoto}/>
                        </figure>
                    </div>
                    <div class="column is-three-quarters is-centered">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article class="tile is-child notification is-primary">
                                    <h1 class="title">
                                        {props.artistName}
                                    </h1>
                                    <h2 class="subtitle">
                                        {props.bio}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.websiteURL}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.phone}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.categories}
                                    </h2>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default artistPanel;
