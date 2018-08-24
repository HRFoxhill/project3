import React, { Component } from "react";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";
import {ArtworkPanel, ArtworkContainer} from "../../components/artworkContainer";
import ArtistCard from "../../components/artistCard";
// import ArtworkContainer from "../../components/artworkContainer";

// import mediumPanel from "../../components/artistPanel/mediumPanel";
// import localShows from "../../components/localShows";

class Medium extends Component {
    state = {
        medium: "",
        art: [],
    };
    handleMediumSearch = () => {
        let parsedUrlMedium = window.location.href.split("=").pop();
        let populatedArtArray = [];

        this.setState({
            medium: parsedUrlMedium,
        })
        console.log(parsedUrlMedium)

        // get art by medium
        APIArt.getArtByMedium(parsedUrlMedium)
            .then(data => {
                // console.log(data.data);
                data.data.forEach(item => {
                    APIArtists.getArtistByArt(item._id)
                        .then(results => {
                            item.artistInfo = results.data[0]
                            populatedArtArray.push(item);

                        })
                        .catch(err => console.log(err));
                })
                this.setState({
                    art: populatedArtArray
                })
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
            this.handleMediumSearch();
        };
    };
    
    render() {
        return (
            <div>
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
                                // artistName={artwork.artistInfo.artistName}
                                //add link that routes to portfolio page here. portfolioLink={}
                            />
                            </div>
                        );
                    })}
                {/* </ArtworkContainer> */}
            </div>
        )
    }
}






export default Medium;