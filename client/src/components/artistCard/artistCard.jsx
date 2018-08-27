import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = props => (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.art[0]} alt="Artwork image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={props.profilePhoto} alt="Profile image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        {/* <p className="title is-4">{props.artistName}</p> */}
                        <Link to={"portfolio=" + props.artistId} className="subtitle is-6">{props.artistName}</Link>
                    </div>
                </div>
            </div>
        </div>
);

export default ArtistCard;