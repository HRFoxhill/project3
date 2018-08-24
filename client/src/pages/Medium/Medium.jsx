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

    componentDidMount = event => {
        let parsedUrlMedium = window.location.href.split("=").pop();
        this.setState({
            medium: parsedUrlMedium,
        })
        console.log(parsedUrlMedium)

        // get art pieces by medium
        APIArt.getArtByMedium(parsedUrlMedium)
            .then(data => {
                console.log(data.data);
                // then for each piece that is returned, query the artist Db for the artist that has that art id in their art array
                data.data.forEach(item => {
                    // this route doesn't exist yet - Joe is making
                    APIArtists.getArtistByArt(item._id)
                        .then(results => {
                            // bundle all that info into a useful state to be rendered on that page
                            console.log(results)
                        })
                        .catch(err => console.log(err));
                })

                this.setState({
                    art: data.data
                })
                // console.log(this.state.art)
            })
            .catch(err => console.log(err));
    }

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