import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import featured from "../../components/featured";
import discover from "../../components/discover";
import artistCard from "../../components/artistCard";
// import navbar from "../../components/navbar";
// import footer from "../../components/footer";
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
                is this working?
                <navbar/>
                <featured/>
                <discover>
                  {this.state.category.artists.map(artist => {
                      return (
                        <artistCard
                          featuredPhoto={artist.featuredPhoto}
                          profilePhoto={artist.profilePhoto}
                          artistName={artist.artistName}
                        />
                      )
                  })}  
                </discover>
                <footer/>
            </div>
        )
    }
}

export default Category;