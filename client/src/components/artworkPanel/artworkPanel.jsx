import React from "react";
import 'bulma/css/bulma.css';


const artworkPanel = props => (
    <section className="hero is-medium is-light is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <figure className="image">
                            <img className="artwork-image" src={props.url}/>
                        </figure>
                    </div>
                    <div class="column is-two-thirds">
                        <h1 class="title">
                            {props.title}
                        </h1>
                        <h2 class="subtitle">
                            {props.category}
                        </h2>
                        <h2 class="subtitle">
                            {props.dimensions}
                        </h2>
                        <h2 class="subtitle">
                            {props.yearCreated}
                        </h2>
                        <h2 class="subtitle">
                            {props.description}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default artworkPanel;
