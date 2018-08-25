import React, { Component } from "react";
import SubmitCancel from "../../components/submit_cancel";
import { ArtworkPanel, ArtworkContainer } from "../../components/artworkContainer";
import APIArtist from "../../utils/APIArtists";
import APIArt from "../../utils/APIArt";

class EditArt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistId: "",
            url: "http://via.placeholder.com/500x500",
            title: "",
            medium: "",
            description: "",
            yearCreated: "",
            dimensions: "",
            art: [],
            artId: ""
            // deletePiece: "",
            // update: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    populateThePage = () => {
        let parsedUrlArtistId = window.location.href.split(":").pop();
        this.setState({
            artistId: parsedUrlArtistId,
        })
        console.log(parsedUrlArtistId)
        // this.addArt();

        APIArtist.getArtByArtist(parsedUrlArtistId)
            .then(data => {
                console.log(data.data);
                    this.setState({
                        art: data.data.art,
                    })
                    // this.setState({update:true})
                // this.forceUpdate()
                console.log(this.state.art)
            })
            .catch(err => console.log(err));
    }

    componentDidMount = event => {
        this.populateThePage();
    };
    componentDidUpdate = () => {
        // !!this will also needs to be updated with Joe's patch and to actually make sense with the data on this page
        let parsedUrlArtistId = window.location.href.split(":").pop();

        if (parsedUrlArtistId !== this.state.artistId) {
            this.populateThePage()
        };

    };

    populateEditFields = artId => {
        console.log(artId);
        APIArt.getArtPiece(artId)
        .then(data => {
            console.log(data)
            this.setState({
                url: data.data.url,
                title: data.data.title,
                // medium: data.data.medium,
                description: data.data.description,
                yearCreated: data.data.yearCreated,
                dimensions: data.data.dimensions,
                artId: data.data._id
            })
        })
        .catch(err => console.log(err))
    };

    deleteArt = artId => {
        console.log("deleting...need to refresh to see effect")
        APIArt.deleteArtPiece(artId)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    updateArt = artId => {
        console.log("updating...need to refresh to see effect")
        APIArt.updateArtPiece(artId, {
            title: this.state.title,
            // medium: this.state.medium,
            url: this.state.url,
            dimensions: this.state.dimensions,
            yearCreated: this.state.yearCreated,
            description: this.state.description,
            artId: this.state.artId
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    addArt = () => {
        console.log("adding...need to refresh to see effect")
        APIArt.saveArt(this.state.artistId, {
            title: this.state.title,
            // medium: this.state.medium,
            url: this.state.url,
            dimensions: this.state.dimensions,
            yearCreated: this.state.yearCreated,
            description: this.state.description,
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
    };

    resetState = () => {
        this.setState({
            artistId: "",
            url: "http://via.placeholder.com/500x500",
            title: "",
            medium: "",
            description: "",
            yearCreated: "",
            dimensions: "",
            artId: ""
        })
    }

    handleInputChange = (event, callback) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, callback);
        console.log(this.state)
    };


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
                                            key={artwork._id}
                                            url={artwork.url}
                                            title={artwork.title}
                                            medium={artwork.medium}
                                            dimensions={artwork.dimensions}
                                            yearCreated={artwork.yearCreated}
                                            description={artwork.description}
                                        />
                                        <p className="buttons">
                                            {/* featured btn */}
                                            <a className="button is-info is-outlined"
                                            >
                                                <span>Featured</span>
                                                <span className="icon is-small">
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </a>
                                            {/* edit btn */}
                                            <a className="button is-info is-outlined"
                                                onClick={() => this.populateEditFields(artwork._id)}
                                            >
                                                <span>Edit</span>
                                                <span className="icon is-small">
                                                    <i className="far fa-edit"></i>
                                                </span>
                                            </a>
                                            {/* delete btn */}
                                            <a className="button is-danger is-outlined"
                                                onClick={() => this.deleteArt(artwork._id)}
                                            >
                                                <span>Delete</span>
                                                <span className="icon is-small">
                                                    <i className="fas fa-times"></i>
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
                            <h1>Add/Update Art Piece Here</h1>
                                <figure className="image is-50x50">
                                    <img className="artwork-photo" src={this.state.url} />
                                </figure>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="url"
                                    onChange={this.handleInputChange}
                                    name="url"
                                    value={this.state.url}
                                />
                            </div>
                        </div>
                        {/* title */}
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Title</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Name"
                                            name="title"
                                            onChange={this.handleInputChange}
                                            value={this.state.title}
                                        />
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
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="100x100"
                                            name="dimensions"
                                            onChange={this.handleInputChange}
                                            value={this.state.dimensions}
                                        />
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
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="2018"
                                            name="yearCreated"
                                            onChange={this.handleInputChange}
                                            value={this.state.yearCreated}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //description */}
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Description</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            placeholder="Artist Statement"
                                            name="description"
                                            onChange={this.handleInputChange}
                                            value={this.state.description}
                                        />
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
                        <SubmitCancel 
                            addOnClick={this.addArt}
                            updateOnClick={() => this.updateArt(this.state.artId)}
                            cancelOnClick={this.resetState}
                            
                        />
                        {/* //save and return to portfolio button */}
                    </div>
                </div>
            </div>
        )
    }
}

export default EditArt;