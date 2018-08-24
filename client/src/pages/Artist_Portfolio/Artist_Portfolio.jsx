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
            email: "DBrewer@Art.com",
            password: "password",
            artistName: "Dick Brewer",
            phone: "506-344-3232",
            websiteURL: "http://dixplexia.com/",
            bio: "My work revolves around vibration and the transformation of energy. I use a 21,000 RPM die grinder to mine abstract images. Over the course of 27 years, the vibration from the die grinder has shaken me out of the mundane and into the sacred. As I work, I listen to music and let it guide my movements. Music and sound are the underpinnings of my work. The marks I make reference techno, jazz, symphonic and primitive forms. The whining of the grinder abrading the plex mingles with the baseline and melody, punctuated with my own percussion. The effect is mesmerizing and meditative. A rhythmic, harmonic hum creates a gateway to higher consciousness through a vibrating field of visual sound, blurring sensory boundaries.",
            profilePhoto: "http://dixplexia.com/thumbnails/pics/17Isisframe.jpg"
        },
        Art: [
            {
                title: "Isis",
                medium: "Mixed Media",
                url: "http://dixplexia.com/thumbnails/pics/17Isisframe.jpg",
                dimensions: "27x21",
                yearCreated: "2017",
                description: "Created using a 21,000 ROM grinder.",
            },
            {
                title: "Eldorado Blvd",
                medium: "Mixed Media",
                url: "http://dixplexia.com/thumbnails/pics/5EldoradoBlvdframe.jpg",
                dimensions: "29x23",
                yearCreated: "2018",
                description: "Created using a 21,000 ROM grinder.",
            },
        ]
    };
    // componentDidMount = event => {

    //     this.setState({
    //         Artist: APIArtists.getArtistByName("Dick Brewer"),
    //         Art: APIArt.getAllArt()
    //       })
          
    //   }

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