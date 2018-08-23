import React, { Component } from "react";
// import 'bulma/css/bulma.css';
import ArtistPanel from "../../components/artistPanel";
import {ArtworkContainer, ArtworkPanel} from "../../components/artworkContainer";
import APIArtists from "../../utils/APIArtists"
import APIArt from "../../utils/APIArt"
// import LocalShows from "../../components/localShows";

class portfolio extends Component{
    state = {
        Artist: {
            profilePhoto: "",
            artistName: "",
            bio: "",
            websiteURL: "",
            phone: "",
            mediums: ""
        },
        Art: []
    };
    componentDidMount = event => {

        this.setState({
            Artist: APIArtists.getArtistByName("Dick Brewer"),
            Art: APIArt.getAllArt()
          })
          
      }

    render() {
        return (
            <div>
                <ArtistPanel
                  profilePhoto={this.state.Artist.profilePhoto}
                  artistName={this.state.Artist.artistName}
                  bio={this.state.Artist.bio}
                  websiteURL={this.state.Artist.websiteURL}
                  phone={this.state.Artist.phone}
                  categories={this.state.Artist.email}
                />

                <ArtworkContainer>
                    {this.state.Art.map(artwork => {
                        return (
                            <ArtworkPanel
                                url={artwork.url}
                                title={artwork.title}
                                category={artwork.medium}
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