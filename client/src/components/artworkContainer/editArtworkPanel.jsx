import React from "react";
import { Link } from "react-router-dom";

export const EditArtworkPanel = props => (
    <div className="card" id="edit-artwork-card">
        <div className="card-image">
            <figure className="image">
                <img src={props.url} className="artwork-image" id="edit-portfolio-artwork" alt="Placeholder" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{props.title}</p>
                </div>
            </div>
            <div className="content">
                <p className="subtitle is-6">{props.category}</p>
                <p className="subtitle is-6">{props.dimensions}</p>
                <p className="subtitle is-6">{props.yearCreated}</p>
                <p className="subtitle is-6">{props.description}</p>
                <Link to={"portfolio=" + props.artistId} className="subtitle is-6">{props.artistName}</Link>
            </div>
        </div>
    </div>
);

