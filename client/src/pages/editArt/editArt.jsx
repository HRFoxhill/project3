import React, { Component } from "react";
import SubmitCancel from "../../components/submit_cancel";
import {ArtworkPanel, ArtworkContainer} from "../../components/artworkContainer";

class EditArt extends Component {
    state = {
        
    };
  
    render() {
      return (
          <div>
              <div className="columns">
                <div className="column">
                    <ArtworkContainer>
                        {this.state.Artist.art.map(artwork => {
                            return (
                                <div>
                                <ArtworkPanel
                                    url={artwork.url}
                                    title={artwork.title}
                                    category={artwork.category}
                                    dimensions={artwork.dimensions}
                                    yearCreated={artwork.yearCreated}
                                    description={artwork.description}
                                />
                                <p class="buttons">
                                    <a class="button is-info is-outlined">
                                        <span>Featured</span>
                                        <span class="icon is-small">
                                        <i class="fas fa-star"></i>
                                        </span>
                                    </a>
                                    <a class="button is-info is-outlined">
                                        <span>Edit</span>
                                        <span class="icon is-small">
                                        <i class="far fa-edit"></i>
                                        </span>
                                    </a>
                                    <a class="button is-danger is-outlined">
                                        <span>Delete</span>
                                        <span class="icon is-small">
                                            <i class="fas fa-times"></i>
                                        </span>
                                    </a>
                                </p>
                                </div>
                            );
                        })}
                    </ArtworkContainer>
                </div>
                <div className="column">
                
                
{/* // container
    //previews
        //panel
            //photo
            //info
            //edit button
            //delete button
            //featured choice

    //form
        //url */}
        <div className="tile is-parent is-8">
            <div className="tile is-child box">
                <figure className="image is-50x50">
                    <img className="artwork-photo"src="https://i.pinimg.com/originals/5e/12/50/5e125039e7283e37a51b52c6cb261aeb.jpg"/>
                </figure>
                <input className="input" type="text" placeholder="url"></input>
            </div>
        </div>
        //title
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Title</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Name"/>
                    </div>
                </div>
            </div>
        </div>
        {/* //dimensions __ X __ */}
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Dimensions (inches)</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="100x100"/>
                    </div>
                </div>
            </div>
        </div>
        {/* //medium dropdown */}
        <div class="control">
            <div class="select">
                <select>
                    {this.state.Artist.mediums.map(medium => {
                        return (
                        <option>{medium}</option>
                    )
                    })}
                </select>
            </div>
        </div>
        {/* //year YYYY */}
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Year</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="2018"/>
                    </div>
                </div>
            </div>
        </div>
        {/* //description */}
        <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Artist Statement</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" placeholder="Artist Statement"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        {/* //SOLD(?) */}
            <div className="field">
                <div className="control">
                    <label class="checkbox">
                        <input type="checkbox"/>
                            Sold
                    </label>
                </div>
            </div>
              
        {/* //submit button */}
        <SubmitCancel/>
    {/* //save and return to portfolio button */}
      </div>
      </div>
    </div>
    )}}

export default EditArt;