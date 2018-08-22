import React, { Component } from "react";
import SignInModal from "../SignInUpModals/SignInModal";
import SignUpModal from "../SignInUpModals/SignUpModal";



class Nav extends Component {
  handleSignInModalOpen = () => {
    // open sign-up
    document.querySelector("#SignInModal").classList.add("is-active");
  };

  render() {
    return (
      <nav class="navbar is-light">
        <SignInModal />
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
              <p class="control">
                <span class="select">
                  <select>
                    <option>Medium</option>
                    <option>Artist</option>
                  </select>
                </span>
              </p>
              <div class="control">
                <input class="input " type="text" placeholder="Search..." />
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
                  <a class="button is-info">
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
                <a class="nav-categories">Mixed Media</a>
                <a class="nav-categories">Ceramics</a>
                <a class="nav-categories">Drawing</a>
                <a class="nav-categories">Illustration</a>
                <a class="nav-categories"> Painting</a>
                <a class="nav-categories">Photography</a>
                <a class="nav-categories">Sculpture</a>
                <a class="nav-categories">Glass Works</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  };
};
export default Nav;
