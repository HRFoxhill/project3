import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import API from "../../utils/APIArtists";
import Discover from "../../components/discover";
import ArtistCard from "../../components/artistCard";
// import localShows from "../../components/localShows";

class Medium extends Component{
    state = {
        category: {
            categoryName: "",
            artists: []
        }
    };
    render() {
        return (
            <div> 
                <Discover>
                  {this.state.category.artists.map(artist => {
                      return (
                        <ArtistCard
                          featuredPhoto={artist.featuredPhoto}
                          profilePhoto={artist.profilePhoto}
                          artistName={artist.artistName}
                        />
                      )
                  })}  
                </Discover>
            </div>
        );
    }
}

export default Medium;