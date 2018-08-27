import React from "react";
import { Link } from "react-router-dom";

export const ArtworkPanel = props => (
    <div className="card is-one-third dark-translucentish" id="artwork-card">
        <div className="card-image">
            <figure className="image">
                <img src={props.url} className="artwork-image" id="portfolio-artwork" alt="Placeholder image" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4 has-text-grey-darker">{props.title}</p>
                </div>
            </div>
            <div className="content">
                <p className="subtitle is-6 has-text-grey">{props.category}</p>
                <p className="subtitle is-6 has-text-grey">{props.dimensions}</p>
                <p className="subtitle is-6 has-text-grey">{props.yearCreated}</p>
                <p className="subtitle is-6 has-text-grey">{props.description}</p>
                <Link to={"portfolio=" + props.artistId} className="subtitle is-6 link-color">{props.artistName}</Link>
            </div>
        </div>
    </div>
);

