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
                    <p className="title is-4 has-text-white-ter">{props.title}</p>
                </div>
            </div>
            <div className="content">
                <p className="subtitle is-6 has-text-grey-lighter">{props.category}</p>
                <p className="subtitle is-6 has-text-grey-lighter">{props.dimensions}</p>
                <p className="subtitle is-6 has-text-grey-lighter">{props.yearCreated}</p>
                <p className="subtitle is-6 has-text-grey-lighter">{props.description}</p>
                <Link to={"portfolio=" + props.artistId} className="subtitle is-6">{props.artistName}</Link>
            </div> 
    </div>
    // <section className="hero is-dark is-bold" id="artwork-panel">
    //     <div className="hero-body">
    //         <div className="container">
    //             <div className="columns">
    //                 <div className="column is-half is-centered">
    //                     <figure className="image">
    //                         <img className="artwork-image" id="portfolio-artwork" src={props.url}/>
    //                     </figure>
    //                 </div>
    //                 <div className="column is-half">
    //                     <h1 className="title">
    //                         {props.title}
    //                     </h1>
    //                     <h2 className="subtitle">
    //                         {props.category}
    //                     </h2>
    //                     <h2 className="subtitle">
    //                         {props.dimensions}
    //                     </h2>
    //                     <h2 className="subtitle">
    //                         {props.yearCreated}
    //                     </h2>
    //                     <h2 className="subtitle">
    //                         {props.description}
    //                     </h2>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    </div>
);