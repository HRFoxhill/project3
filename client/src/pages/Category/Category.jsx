import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import API from "../../utils/APIArtists";
import Featured from "../../components/featured";
import Discover from "../../components/discover";
import ArtistCard from "../../components/artistCard";
// import localShows from "../../components/localShows";

class Category extends Component{
    state = {
        category: {
            categoryName: "",
            artists: []
        }
    };
    render() {
        return (
            <div>
                <Featured/>
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
        )
    }
}

export default Category;