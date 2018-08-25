import React, { Component } from "react";
import SubmitCancel from "../../components/submit_cancel";
import { ArtworkPanel, ArtworkContainer } from "../../components/artworkContainer";
import APIArtist from "../../utils/APIArtists";
import APIArt from "../../utils/APIArt";

class EditArt extends Component {
    state = {
        _id: "",
        url: "",
        title: "",
        medium: "",
        description: "",
        yearCreated: "",
        dimensions: "",
        art: []
    };

    componentDidMount = event => {
        let parsedUrlArtId = window.location.href.split(":").pop();
        this.setState({
            _id: parsedUrlArtId,
        })
        console.log(parsedUrlArtId)
        this.addArt();


        APIArtist.getArtByArtist(parsedUrlArtId)
            .then(data => {
                console.log(data.data);
                console.log(this.state.art)
                if (data.data.art.length) {
                    this.setState({
                        // url: data.data.art.url,
                        // title: data.data.art.title,
                        // medium: data.data.medium,
                        // description: data.data.art.description,
                        // yearCreated: data.data.art.yearCreated,
                        // dimensions: data.data.art.dimensions,
                        art: data.data.art,
                    })
                } else "You have not submitted any artwork yet"

                console.log(this.state.art)
            })
            .catch(err => console.log(err));
    };
    addArt = () => {
        APIArt.saveArt("5b7eaff94e58a9f983d13283", {
            title: "Isis",
            medium: "Mixed Media",
            url: "http://dixplexia.com/thumbnails/pics/17Isisframe.jpg",
            dimensions: "27x21",
            yearCreated: "2017",
            description: "Created using a 21,000 RPM grinder.",
        })
    }

    // handleInputChange = (event, callback) => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     }, callback);
    // };

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <ArtworkContainer>
                            {this.state.art.map(artwork => {
                                return (
                                    <div>
                                        <ArtworkPanel
                                            url={artwork.url}
                                            title={artwork.title}
                                            medium={artwork.medium}
                                            dimensions={artwork.dimensions}
                                            yearCreated={artwork.yearCreated}
                                            description={artwork.description}
                                        />
                                        <p className="buttons">
                                            <a className="button is-info is-outlined">
                                                <span>Featured</span>
                                                <span class="icon is-small">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            </a>
                                            <a className="button is-info is-outlined">
                                                <span>Edit</span>
                                                <span class="icon is-small">
                                                    <i class="far fa-edit"></i>
                                                </span>
                                            </a>
                                            <a className="button is-danger is-outlined">
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
                                    <img className="artwork-photo" src="https://i.pinimg.com/originals/5e/12/50/5e125039e7283e37a51b52c6cb261aeb.jpg" />
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
                                        <input className="input" type="text" placeholder="Name" />
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
                                        <input className="input" type="text" placeholder="100x100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //medium dropdown */}
                        <div className="control">
                            <div className="select">
                                <select>
                                    {/* {this.state.art.map(medium => {
                        return (
                        <option>{medium}</option>
                    ) */}
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
                                        <input className="input" type="text" placeholder="2018" />
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
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    Sold
                    </label>
                            </div>
                        </div>

                        {/* //submit button */}
                        <SubmitCancel />
                        {/* //save and return to portfolio button */}
                    </div>
                </div>
            </div>
        )
    }
}

export default EditArt;