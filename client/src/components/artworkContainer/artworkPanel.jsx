import React from "react";

export const ArtworkPanel = props => (
    <div class="card is-one-third" id="artwork-card">
        <div class="card-image">
            <figure class="image">
                <img src={props.url} className="artwork-image" id="portfolio-artwork" alt="Placeholder image"/>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{props.title}</p>
                </div>
            </div>
            <div class="content">
                <p class="subtitle is-6">{props.category}</p>
                <p class="subtitle is-6">{props.dimensions}</p>
                <p class="subtitle is-6">{props.yearCreated}</p>
                <p class="subtitle is-6">{props.description}</p>
                <p class="subtitle is-6">{props.artistName}</p>
                <p class="subtitle is-6">{props.portfolioLink}</p>
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

