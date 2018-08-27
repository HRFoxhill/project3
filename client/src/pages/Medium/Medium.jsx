import React, { Component } from "react";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";
import { ArtworkPanel, ArtworkContainer } from "../../components/artworkContainer";

class Medium extends Component {
    state = {
        medium: "",
        art: [],
        update: false
    };
    handleMediumSearch = () => {
        console.log("RUNNING SEARCH....")
        let parsedUrlMedium = window.location.href.split("=").pop();
        console.log(parsedUrlMedium);
        let populatedArtArray = [];

        this.setState({
            medium: parsedUrlMedium,
        })

        APIArt.getArtByMedium(parsedUrlMedium)
            .then(data => {
                data.data.forEach(item => {
                    APIArtists.getArtistByArt(item._id)
                        .then(results => {
                            item.artistInfo = results.data[0]
                            populatedArtArray.push(item);
                            this.setState({ update: true })
                        })
                        .catch(err => console.log(err));
                })
                this.setState({
                    art: populatedArtArray
                })
                this.forceUpdate()
                console.log(this.state.art)
            })
            .catch(err => console.log(err));
    }
    componentDidMount = () => {
        this.handleMediumSearch();
    };

    componentDidUpdate = () => {
        let parsedUrlMedium = window.location.href.split("=").pop();
        if (parsedUrlMedium !== this.state.medium) {
            this.handleMediumSearch()
        };
    };
    artMap = () => this.state.art.map(artwork => {
        console.log(artwork)
        return (
            <ArtworkPanel
                key={artwork._id}
                url={artwork.url}
                title={artwork.title}
                category={artwork.medium}
                dimensions={artwork.dimensions}
                yearCreated={artwork.yearCreated}
                description={artwork.description}
                artistName={"By " + artwork.artistInfo.artistName}
                artistId={artwork.artistInfo._id}
            />
        );
    })
    render() {
        return (
            <div className="mediums-div">
                <ArtworkContainer>
                    {this.artMap()}
                </ArtworkContainer>
            </div>
        )
    }
}






export default Medium;