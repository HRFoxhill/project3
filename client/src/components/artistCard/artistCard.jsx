import React from "react";


const ArtistCard = props => (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={props.featuredPhoto} alt="Artwork image"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src={props.profilePhoto} alt="Profile image"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{props.artistName}</p>
                        <a class= "button is-info is-rounded" href="#">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
);

export default ArtistCard;