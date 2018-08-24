import React, { Component } from "react";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";
import Discover from "../../components/discover";
import ArtistCard from "../../components/artistCard";
// import localShows from "../../components/localShows";

class Medium extends Component {
    state = {
        medium: "",
        art: [],
        featuredPhoto: "",
        profilePhoto: "",
        artistName: "",
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
                hello world

            </div>
        );
    }
}

export default Medium;