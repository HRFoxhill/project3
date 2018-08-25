import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInModal from "../SignInUpModals/SignInModal";
import SignUpModal from "../SignInUpModals/SignUpModal";
import Logo from "../../images/FaviconLogo options/Option2.JPG"
// import APIArtist from "../../utils/APIArtists";



class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInModalOpen: false,
      searchBarValue: "",
      searchDropDownValue: "Medium",
    };
  };

  handleInputChange = (event, callback) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, callback);
  };

  handleDropDownChange = selectedValue => {
    this.setState({
      searchDropDownValue: selectedValue.target.value
    });

  };

  handleSearchBarUpdate = event => {
    
  };


  handleSignInModalOpen = () => {
    // open sign-up
    document.querySelector("#SignInModal").classList.add("is-active");
    // if (!this.state.modalOpen) {
    //   this.setState({
    //     signInModalOpen: true,
    // });
    // }
  };

  render() {
    return (

      <nav className="navbar is-light">
        <SignInModal
        // modalClassName={this.state.signInModalOpen? "modal is-active":"modal"}
        />
        <SignUpModal />
        <div className="navbar-brand">

          {/* logo */}
          <Link className="navbar-item" to="/">
            <img
              src= {Logo}
              alt="Logo Name"
              width="112"
              height="28"
            />
          </Link>


          {/* search */}
          <div className="navbar-item search-bar">
            <div className="field has-addons">

              {/* search dropdown menu */}
              <p className="control">
                <span className="select">
                  <select
                    id="navbarSearchDropdown"
                    value={this.state.searchDropDownValue}
                    onChange={this.handleDropDownChange}
                  >
                    <option>Medium</option>
                    <option>Artist</option>
                  </select>
                </span>
              </p>

              {/* search bar */}
              <div className="control">
                <input
                  className="input "
                  type="text"
                  placeholder="Search..."
                  id="navbarSearchBox"
                  onChange={this.handleInputChange}
                  name="searchBarValue"
                  // value={this.state.searchBarValue}
                />
              </div>
              <div className="control">
                <Link
                  className="button is-info"
                  to={this.state.searchDropDownValue === "Medium" ? ("/search/cat=medium/?=" + this.state.searchBarValue) : this.state.searchDropDownValue === "Artist" ? ("/search/cat=artist/?=" + this.state.searchBarValue) : ""}
                  onClick={this.updateSearchBarValue}
                >
                  <span className="icon">
                    <i className="fas fa-search" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* burger */}
          <div className="navbar-burger burger">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* navbar menu */}
        <div className="navbar-menu">
          <div className="navbar-start" />
          <div className="navbar-end">


            {/* Login/Signup */}
            <div className="navbar-item">
              <div className="field">
                <p className="control">
                  <a className="button is-info"
                    onClick={this.handleSignInModalOpen}
                    id="signInModalOpen"
                  >
                    <span className="icon">
                      <i className="fas fa-sign-in-alt" />
                    </span>
                    <span>Login | Sign-Up</span>
                  </a>
                </p>
              </div>
            </div>

            {/* bottom nav categories */}
            <div className="navbar-item nav-div is-light">
              <div className="categories-container">
                <Link className="nav-categories" to="/medium=Mixed%20Media">Mixed Media</Link>
                <Link className="nav-categories" to="/medium=Ceramics">Ceramics</Link>
                <Link className="nav-categories" to="/medium=Drawing">Drawing</Link>
                <Link className="nav-categories" to="/medium=Illustration">Illustration</Link>
                <Link className="nav-categories" to="/medium=Painting">Painting</Link>
                <Link className="nav-categories" to="/medium=Photography">Photography</Link>
                <Link className="nav-categories" to="/medium=Sculpture">Sculpture</Link>
                <Link className="nav-categories" to="/medium=Glass%20Works">Glass Works</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  };
};
export default Nav;
