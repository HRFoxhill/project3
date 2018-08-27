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

    if (this.state.searchCategory === "medium") {
      console.log("in the medium")
      APIArt.getArtByMedium(this.state.searchValue)
            .then(data => {
                // console.log(data.data);
                data.data.forEach(item => {
                    APIArtists.getArtistByArt(item._id)
                        .then(results => {
                          console.log(results)
                            // item.artistInfo = results.data[0]
                            // populatedArtArray.push(item);   
                            // this.setState({update:true})
                        })
                        .catch(err => console.log(err));
                })
                this.setState({
                    // art: populatedArtArray
                })
            })
            .catch(err => console.log(err));
    } else if (this.state.searchCategory === "artist") {
      console.log("with the artists")
      APIArtists.getArtistByName({ $regex: /this.state.searchValue/, $options: 'i' })
        .then(data => {
          console.log(data.data);
          this.setState({
            // profilePhoto: data.data.profilePhoto,
            // artistName: data.data.artistName,
            // bio: data.data.bio,
            // websiteURL: data.data.websiteURL,
            // phone: data.data.phone,
            // // medium: data.data.medium,
            // art: data.data.art,
          })
          // console.log(this.state.art)
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
        what up world

      </div>
    );
  }
}

export default SearchResults;
