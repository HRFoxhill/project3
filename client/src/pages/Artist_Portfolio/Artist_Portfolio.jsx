import React, { Component } from "react";
import ArtistPanel from "../../components/artistPanel";
import { ArtworkContainer, ArtworkPanel } from "../../components/artworkContainer";
import APIArtists from "../../utils/APIArtists"

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
    handleDisplayPortfolio = () => {
        let parsedUrlArtistId = window.location.href.split("=").pop();
        this.setState({
            _id: parsedUrlArtistId,
        });

        APIArtists.getArtByArtist(parsedUrlArtistId)
            .then(data => {
                this.setState({
                    profilePhoto: data.data.profilePhoto,
                    artistName: data.data.artistName,
                    bio: data.data.bio,
                    websiteURL: data.data.websiteURL,
                    phone: data.data.phone,
                    art: data.data.art,
                });
            })
            .catch(err => console.log(err));
    };
    componentDidMount = event => {
        this.handleDisplayPortfolio()
    };
    componentDidUpdate = () => {
        let parsedUrlArtist = window.location.href.split("=").pop();

        if (parsedUrlArtist !== this.state._id) {
            this.handleDisplayPortfolio()
        };
    };
    render() {
        return (
            <div className="portfolio-div">
                <ArtistPanel
                    id={this.state._id}
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
                                key={artwork._id}
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
    };
};

export default portfolio;