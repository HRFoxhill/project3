import React from "react";

const Nav = props => {
  return (
    
    <nav class="navbar is-light">
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
                  <option>Category</option>
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
              <a class="nav-categories">Ceramic</a>
              <a class="nav-categories">Paint</a>
              <a class="nav-categories">Abstract</a>
              <a class="nav-categories">Other</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
