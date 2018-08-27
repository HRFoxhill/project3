import React from "react";
import { Link } from "react-router-dom";

export const EditArtworkPanel = props => (
    <div className="card" id="edit-artwork-card">
        <div className="card-image">
            <figure className="image">
                <img src={props.url} className="artwork-image" id="edit-portfolio-artwork" alt="Placeholder image" />
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
);

