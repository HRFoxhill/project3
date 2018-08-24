import React from "react";


const ArtistCard = props => (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.featuredPhoto} alt="Artwork image"/>
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
                        <p className="title is-4">{props.artistName}</p>
                        <a className= "button is-info is-rounded" href="#">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
);

export default ArtistCard;