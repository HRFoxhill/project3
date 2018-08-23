import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import ArtistPanel from "../../components/artistPanel";
import {ArtworkPanel, ArtworkContainer} from "../../components/artworkContainer";
// import LocalShows from "../../components/localShows";

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
                <ArtistPanel
                  profilePhoto={this.state.Artist.profilePhoto}
                  artistName={this.state.Artist.artistName}
                  bio={this.state.Artist.bio}
                  websiteURL={this.state.Artist.websiteURL}
                  phone={this.state.Artist.phone}
                  categories={this.state.Artist.categories}
                />
                {/* <LocalShows/> */}
                <ArtworkContainer>
                    {this.state.Artist.art.map(artwork => {
                        return (
                            <ArtworkPanel
                                url={artwork.url}
                                title={artwork.title}
                                category={artwork.category}
                                dimensions={artwork.dimensions}
                                yearCreated={artwork.yearCreated}
                                description={artwork.description}
                            />
                        );
                    })}
                </ArtworkContainer>
            </div>
        )
    }
}






export default portfolio;