import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import artistPanel from "../../components/artistPanel";
import {artworkPanel, artworkContainer} from "../../components/artworkContainer";
// import navbar from "../../components/navbar";
// import footer from "../../components/footer";
// import localShows from "../../components/localShows";

class portfolio extends Component{
    state = {
        Artist: {
            profilePhoto: "",
            artistName: "",
            bio: "",
            websiteURL: "",
            phone: "",
            categories: "",
            art: []
        }
    };
    render() {
        return (
            <div>
                is this working?
                <navbar/>
                <artistPanel
                  profilePhoto={this.state.Artist.profilePhoto}
                  artistName={this.state.Artist.artistName}
                  bio={this.state.Artist.bio}
                  websiteURL={this.state.Artist.websiteURL}
                  phone={this.state.Artist.phone}
                  categories={this.state.Artist.categories}
                />
                <localShows/>
                <artworkContainer>
                    {this.state.Artist.art.map(artwork => {
                        return (
                            <artworkPanel
                                url={artwork.url}
                                title={artwork.title}
                                category={artwork.category}
                                dimensions={artwork.dimensions}
                                yearCreated={artwork.yearCreated}
                                description={artwork.description}
                            />
                        );
                    })}
                </artworkContainer>
                <footer/>
            </div>
        )
    }
}






export default portfolio;