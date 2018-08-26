import React, { Component } from "react";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";
import { ArtworkPanel, ArtworkContainer } from "../../components/artworkContainer";
import ArtistCard from "../../components/artistCard";
// import ArtworkContainer from "../../components/artworkContainer";

// import localShows from "../../components/localShows";

class Medium extends Component {
    state = {
        medium: "",
        art: [],
        update: false
    };
    handleMediumSearch = () => {
        console.log("RUNNING SEARCH....")
        let parsedUrlMedium = window.location.href.split("=").pop();
        let populatedArtArray = [];

        this.setState({
            medium: parsedUrlMedium,
        })
        // console.log(parsedUrlMedium)

        // get art by medium
        APIArt.getArtByMedium(parsedUrlMedium)
            .then(data => {
                // console.log(data.data);
                data.data.forEach(item => {
                    APIArtists.getArtistByArt(item._id)
                        .then(results => {
                            item.artistInfo = results.data[0]
                            populatedArtArray.push(item);   
                            this.setState({update:true})
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
        
        //    this doesn't work - Joe taking over
        // if (this.state.art.length) {
        //     this.handleMediumSearch();
        // }
    };
    artMap = () => this.state.art.map(artwork => {
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
            <div class="mediums-div">
                <ArtworkContainer>
                    {this.artMap()}
                </ArtworkContainer>
            </div>
        )
    }
}






export default Medium;