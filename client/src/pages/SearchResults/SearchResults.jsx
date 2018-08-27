import React, { Component } from "react";
// import ArtistCard from "../../components/artistCard";
import APIArt from "../../utils/APIArt";
import APIArtists from "../../utils/APIArtists";


class SearchResults extends Component {
  state = {
    searchCategory: "",
    searchValue: "",
    update: false,
    results: [],
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
          this.setState({
            results: data.data
          })
        })
        .catch(err => console.log(err));
    } else if (searchCategory === "artist") {
      console.log("with the artists")
      APIArtists.getArtistByName(searchValue)
        .then(data => {
          console.log(data.data);
          // this.setState({
          //   artistID: data.data
          // })
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
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default SearchResults;
