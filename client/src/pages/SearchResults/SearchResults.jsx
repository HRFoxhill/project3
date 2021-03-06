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

    if (searchCategory === "medium") {
      APIArt.getArtByMedium(searchValue)
        .then(data => {
          data.data.forEach(item => {
            APIArtists.getArtistByArt(item._id)
              .then(results => {
                item.artistInfo = results.data[0];
                populatedArtArray.push(item);
                this.setState({ update: true })
              })
              .catch(err => console.log(err));
          })
          this.setState({
            art: populatedArtArray
          })
          this.forceUpdate()
        })
        .catch(err => console.log(err));
    } else if (searchCategory === "artist") {
      APIArtists.getArtistByName(searchValue)
        .then(data => {
          data.data[0].art.forEach(item => {
                item.artistInfo = data.data[0];
                populatedArtArray.push(item);
                this.setState({ update: true })
          })
          this.setState({
            art: populatedArtArray
          })
          this.forceUpdate()
        })
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
        <ArtworkContainer>
          {this.artMap()}
        </ArtworkContainer>

      </div>
    );
  }
}

export default SearchResults;
