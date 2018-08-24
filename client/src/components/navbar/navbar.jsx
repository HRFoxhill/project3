import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInModal from "../SignInUpModals/SignInModal";
import SignUpModal from "../SignInUpModals/SignUpModal";



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
    console.log(this.state.searchDropDownValue)
    this.setState({
      searchDropDownValue: selectedValue.target.value
    });
    
  };

  launchSearch = () => {
    
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

      <nav class="navbar is-light">
        <SignInModal
        // modalClassName={this.state.signInModalOpen? "modal is-active":"modal"}
        />
        <SignUpModal />
        <div class="navbar-brand">

          {/* logo */}
          <a class="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Logo Name"
              width="112"
              height="28"
            />
          </a>


          {/* search */}
          <div class="navbar-item search-bar">
            <div class="field has-addons">

            {/* search dropdown menu */}
              <p class="control">
                <span class="select">
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
              <div class="control">
                <input class="input " type="text" placeholder="Search..." id="navbarSearchBox" onChange={this.handleInputChange} />
              </div>
              <div class="control">
                <a class="button is-info">
                  <span className="icon">
                    <i class="fas fa-search" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* burger */}
          <div class="navbar-burger burger">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* navbar menu */}
        <div className="navbar-menu">
          <div className="navbar-start" />
          <div class="navbar-end">


            {/* Login/Signup */}
            <div class="navbar-item">
              <div class="field">
                <p class="control">
                  <a class="button is-info" 
                  onClick={this.handleSignInModalOpen}
                  id="signInModalOpen"
                  >
                    <span class="icon">
                      <i class="fas fa-sign-in-alt" />
                    </span>
                    <span>Login | Sign-Up</span>
                  </a>
                </p>
              </div>
            </div>

            {/* bottom nav categories */}
            <div class="navbar-item nav-div is-light">
              <div className="categories-container">
                <a class="nav-categories">
                  <Link
                    to="/editinfo">
                    Mixed Media
                  </Link>
                </a>
                <a class="nav-categories">
                  <Link
                    to="/editinfo">
                    Ceramics
                  </Link>
                </a>
                <a class="nav-categories">
                  <Link to="/editinfo">Drawing</Link>
                </a>
                <a class="nav-categories">
                  <Link to="/editinfo">Drawing</Link>
                </a>
                <a class="nav-categories">
                  <Link to="/editinfo">Drawing</Link>
                </a>
                <a class="nav-categories">
                  <Link to="/editinfo">Drawing</Link>
                </a>
                <a class="nav-categories">
                  <Link to="/editinfo">Sculpture</Link>
                </a>
                <a class="nav-categories">
                  <Link to="/editinfo">Glass Works</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  };
};
export default Nav;
