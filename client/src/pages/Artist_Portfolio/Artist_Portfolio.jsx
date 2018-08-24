// HALEY!  hi :) see below 
// http://localhost:3000/portfolio=5b7e9fda7432aaf5ad99f5bc
//ObjectId("5b8020e07b4e1c21e08ecc36")
// use the above url to test but use an id from your Artist collection in your DB (ours will all be different)

// Also feel free to update the seedDB.js file with pictures, etc that better meet your needs

import React, { Component } from "react";
import ArtistPanel from "../../components/artistPanel";
import { ArtworkContainer, ArtworkPanel } from "../../components/artworkContainer";
import APIArtists from "../../utils/APIArtists"
// import APIArt from "../../utils/APIArt"
// import LocalShows from "../../components/localShows";

class portfolio extends Component {
    state = {
        _id: "",
        profilePhoto: "",
        artistName: "",
        bio: "",
        websiteURL: "",
        phone: "",
        mediums: "",
        art: []
    };
    componentDidMount = event => {
        let parsedUrlArtistId = window.location.href.split("=").pop();
        this.setState({
            _id: parsedUrlArtistId,
        })
        console.log(parsedUrlArtistId)

        APIArtists.getArtByArtist(parsedUrlArtistId)
            .then(data => {
                console.log(data.data);
                this.setState({
                    profilePhoto: data.data.profilePhoto,
                    artistName: data.data.artistName,
                    bio: data.data.bio,
                    websiteURL: data.data.websiteURL,
                    phone: data.data.phone,
                    // medium: data.data.medium,
                    art: data.data.art,
                })
                console.log(this.state.art)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ArtistPanel
                    profilePhoto={this.state.profilePhoto}
                    artistName={this.state.artistName}
                    bio={this.state.bio}
                    websiteURL={this.state.websiteURL}
                    phone={this.state.phone}
                    categories={this.state.email}
                />
                <ArtworkContainer>
                    {this.state.art.map(artwork => {
                        return (
                            <ArtworkPanel
                                url={artwork.url}
                                title={artwork.title}
                                category={artwork.medium}
                                dimensions={artwork.dimensions}
                                yearCreated={artwork.yearCreated}
                                description={artwork.description}
                            />
                        );
                    })}
                </ArtworkContainer>
            </div>
        )
    }
}






export default portfolio;