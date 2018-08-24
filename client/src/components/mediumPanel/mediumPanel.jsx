import React from "react";

const mediumPanel = props => (
    <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div class="column is-three-quarters is-centered">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article class="tile is-child notification is-primary">
                                    <h1 class="title">
                                        {props.artTitle}
                                    </h1>
                                    <h2 class="subtitle">
                                        {props.artMedium}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.artURL}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.artDimensions}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.artYearCreated}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.artDescription}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.artistName}
                                    </h2>
                                    <h2 class="subtitle">
                                        {props.artistWebsite}
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

export default mediumPanel;
