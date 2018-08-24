import React from "react";
// import 'bulma/css/bulma.css';


export const ArtworkPanel = props => (
    <section className="hero is-dark is-bold" id="artwork-panel">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <figure className="image">
                            <img className="artwork-image" id="portfolio-artwork" src={props.url}/>
                        </figure>
                    </div>
                    <div className="column is-half">
                        <h1 className="title">
                            {props.title}
                        </h1>
                        <h2 className="subtitle">
                            {props.category}
                        </h2>
                        <h2 className="subtitle">
                            {props.dimensions}
                        </h2>
                        <h2 className="subtitle">
                            {props.yearCreated}
                        </h2>
                        <h2 className="subtitle">
                            {props.description}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
