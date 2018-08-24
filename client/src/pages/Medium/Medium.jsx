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
    
    componentDidUpdate = event => {
        let parsedUrlMedium = window.location.href.split("=").pop();

        if (parsedUrlMedium !== this.state.medium) {
            let populatedArtArray = [];

            this.setState({
                medium: parsedUrlMedium,
            })
            console.log(parsedUrlMedium)

            // get art by medium
            APIArt.getArtByMedium(parsedUrlMedium)
                .then(data => {
                    console.log(data.data);
                    data.data.forEach(item => {
                        APIArtists.getArtistByArt(item._id)
                            .then(results => {
                                // bundle all that info into a useful state to be rendered on that page
                                
                                item.artistInfo = results.data[0]
                                console.log(results.data[0]);
                                console.log(item)
                                populatedArtArray.push(item);
                                this.setState({
                                    art:  populatedArtArray
                                })
                                console.log(this.state.art)
                            })
                            .catch(err => console.log(err));
                    })

                    
                    // console.log(this.state.art)
                })
                .catch(err => console.log(err));
        };
    };

    render() {
        return (
            <div>
                hello world
                {/* the below coding is breaking - not sure why but took it out for now just for testing purposes - Amanda*/}
                {/* <Discover>
                  {this.state.art.map(artist => {
                      return (
                        <ArtistCard
                          featuredPhoto={featuredPhoto}
                          profilePhoto={profilePhoto}
                          artistName={artistName}
                        />
                      )
                  })}  
                </Discover> */}
            </div>
        );
    }
}

export default Medium;