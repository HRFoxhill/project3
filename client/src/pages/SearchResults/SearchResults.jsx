import React, { Component } from "react";
import ArtistCard from "../../components/artistCard";
import localShows from "../../components/localShows";
import { ArtworkPanel, ArtworkContainer } from "../../components/artworkContainer";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";


class SearchResults extends Component {
  state = {
    searchCategory: "",
    searchValue: "",
    update: false,
  };

  handleSearch = () => {
    let urlSearchParameters = window.location.href.split("cat=").pop();
    let searchValue = urlSearchParameters.split("/?=").pop();
    let searchCategoryPieceMeal = urlSearchParameters.replace(/\/\?=/, "");
    let searchCategory = searchCategoryPieceMeal.replace(searchValue, "");

    this.setState({
      searchCategory: searchCategory,
      searchValue: searchValue,
    })
    console.log(searchCategory, searchValue)

    if (searchCategory === "medium") {
      console.log("in the medium")
      APIArt.getArtByMedium(searchValue)
        .then(data => {
          console.log(data.data);
        })
        .catch(err => console.log(err));
    } else if (searchCategory === "artist") {
      console.log("with the artists")
      APIArtists.getArtistByName(searchValue)
        .then(data => {
          console.log(data.data);
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
  render() {
    return (
      <div>
        {/* <ArtistCard
          
        /> */}

      </div>
    );
  }
}

export default SearchResults;
