import React, { Component } from "react";
// import ArtistCard from "../../components/artistCard";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";
import { ArtworkPanel, ArtworkContainer } from "../../components/artworkContainer";



class SearchResults extends Component {
  state = {
    searchCategory: "",
    searchValue: "",
    art: [],
    update: false,
    results: [],
  };

  handleSearch = () => {
    let urlSearchParameters = window.location.href.split("cat=").pop();
    let searchValue = urlSearchParameters.split("/?=").pop();
    let searchCategoryPieceMeal = urlSearchParameters.replace(/\/\?=/, "");
    let searchCategory = searchCategoryPieceMeal.replace(searchValue, "");
    let populatedArtArray = [];

    this.setState({
      searchCategory: searchCategory,
      searchValue: searchValue,
    })
    console.log(searchCategory, searchValue)

    if (searchCategory === "medium") {
      console.log("in the medium")
      APIArt.getArtByMedium(searchValue)
        .then(data => {
<<<<<<< HEAD
          data.data.forEach(item => {
            APIArtists.getArtistByArt(item._id)
              .then(results => {
                item.artistInfo = results.data[0]
                populatedArtArray.push(item);
                this.setState({ update: true })
              })
              .catch(err => console.log(err));
          })
          this.setState({
            art: populatedArtArray
          })
          this.forceUpdate()
          console.log(this.state.art)
=======
          console.log(data.data);
          this.setState({
            results: data.data
          })
>>>>>>> a1545376c4e90ecd9ba40545af424da67ae66d1b
        })
        .catch(err => console.log(err));
    } else if (searchCategory === "artist") {
      console.log("with the artists")
      APIArtists.getArtistByName(searchValue)
        .then(data => {
          console.log(data.data);
<<<<<<< HEAD
          data.data[0].art.forEach(item => {
            APIArt.getArtPiece(item._id)
              .then(results => {
                console.log("READ THIS JOE!: " + results.data)
                item.artistInfo = data.data[0].artistName
                populatedArtArray.push(item);
                this.setState({ update: true })
              })
              .catch(err => console.log(err));
          })
          this.setState({
            art: populatedArtArray
          })
          this.forceUpdate()
          console.log(this.state.art)
=======
          // this.setState({
          //   artistID: data.data
          // })
>>>>>>> a1545376c4e90ecd9ba40545af424da67ae66d1b
        })
        // .then(APIArt.getArtbyArtist())
        .catch(err => console.log(err));
    }
  };
  componentDidMount = event => {
    this.handleSearch()
  };
  componentDidUpdate = () => {
    let urlSearchParameters = window.location.href.split("cat=").pop();
    let searchValue = urlSearchParameters.split("/?=").pop();
    let searchCategoryPieceMeal = urlSearchParameters.replace(/\/\?=/, "");
    let searchCategory = searchCategoryPieceMeal.replace(searchValue, "");

    if (searchCategory !== this.state.searchCategory || searchValue !== this.state.searchValue) {
      this.handleSearch()
    };
  };

  artMap = () => this.state.art.map(artwork => {
    console.log(artwork)
    return (
      <ArtworkPanel
        key={artwork._id}
        url={artwork.url}
        title={artwork.title}
        category={artwork.medium}
        dimensions={artwork.dimensions}
        yearCreated={artwork.yearCreated}
        description={artwork.description}
        artistName={"By " + artwork.artistInfo.artistName}
        artistId={artwork.artistInfo._id}
      />
    );
  })

  render() {
    return (
      <div>
<<<<<<< HEAD
        <ArtworkContainer>
          {this.artMap()}
        </ArtworkContainer>

=======
        {this.state.results.map(result => {
          return (
            <div className="artist-card">
            <ArtistCard
              url={result.url}
              title={result.title}
              // need artist ID and artist name to link to portfolio here
            />
            </div>
          );
        })}
>>>>>>> a1545376c4e90ecd9ba40545af424da67ae66d1b
      </div>
    );
  }
}

export default SearchResults;
