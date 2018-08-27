import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInModal from "../SignInUpModals/SignInModal";
import SignUpModal from "../SignInUpModals/SignUpModal";
import Logo from "../../images/FaviconLogo options/LogoTransparent.png";
import APIArtists from "../../utils/APIArtists";

let SidebarMenu = props => {
  return (
    <aside class="menu">
      <p class="menu-label" />
      <ul class="menu-list">
        <li>
          <a
            onClick={this.handleSignInModalOpen}
            id="signInModalOpen"
          >
            {" "}
            Login
          </a>
        </li>
        <li>
          <a href="#tile-title">Mediums</a>
          <li />
          <Link className="nav-categories" to="/medium=Mixed%20Media">
            Mixed Media
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Ceramics">
            Ceramics
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Drawing">
            Drawing
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Illustration">
            Illustration
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Painting">
            Painting
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Photography">
            Photography
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Sculpture">
            Sculpture
          </Link>
        </li>
        <li>
          <Link className="nav-categories" to="/medium=Glass%20Works">
            Glass Works
          </Link>
        </li>
      </ul>
    </aside>
  );
};

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInModalOpen: false,
      searchBarValue: "",
      searchDropDownValue: "Medium",
      userLoggedIn: "",
      artist: "",
      update: "",
      burgerActive: false
    };
  }

  componentDidMount = () => {
    this.handleSearchBarUpdate();
    // document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  };

  componentDidUpdate = () => {
    if (this.state.update === true) {
      this.handleSearchBarUpdate();
      this.setState({ update: false });
    }
  };

  handleInputChange = (event, callback) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      callback
    );
  };

  handleDropDownChange = selectedValue => {
    this.setState({
      searchDropDownValue: selectedValue.target.value
    });
  };

  toggleState = () => {
    const currentState = this.state.burgerActive;
    this.setState({ burgerActive: !currentState });
  };

  handleSearchBarUpdate = event => {
    let login = document.getElementById("login-button-nav");
    let logout = document.getElementById("logout-button-nav");
    let art = document.getElementById("art-button-nav");
    let profile = document.getElementById("profile-button-nav");
    APIArtists.checkUser()
      .then(data => {
        if (!data.data.email) {
          this.setState({ userLoggedIn: false, artist: "None", update: true });
          art.style.display = "none";
          profile.style.display = "none";
          logout.style.display = "none";
          login.style.display = "block";
          // document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        } else if (data.data.email) {
          this.setState({ userLoggedIn: true, artist: data.data._id });
          art.style.display = "block";
          profile.style.display = "block";
          logout.style.display = "block";
          login.style.display = "none";
        }
      })
      .catch(err => console.log(err));
    // this.setState({ userLoggedIn: true })
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

  handleLogout = () => {
    this.setState({ userLoggedIn: false, artist: "None", update: true });
    APIArtists.artistLogout()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    const burgerActive = this.state.burgerActive;
    let menu;
    if (burgerActive) {
      menu = <SidebarMenu />;
    } else {
      menu = "";
    }

    return (
      <div>
        <nav className="navbar is-white">
          <SignInModal
          // modalClassName={this.state.signInModalOpen? "modal is-active":"modal"}
          />
          <SignUpModal />
          <div className="navbar-brand">
            {/* logo */}
            <Link className="navbar-item" to="/">
              <img src={Logo} alt="Logo Name" width="112" height="28" />
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
                      <option class="option">Medium</option>
                      <option class="option">Artist</option>
                    </select>
                  </span>
                </p>
                {/* search bar */}
                <div className="control">
                  <input
                    className="input"
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
                    className="button login-button"
                    to={
                      this.state.searchDropDownValue === "Medium"
                        ? "/search/cat=medium/?=" + this.state.searchBarValue
                        : this.state.searchDropDownValue === "Artist"
                          ? "/search/cat=artist/?=" + this.state.searchBarValue
                          : ""
                    }
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
            <div className="navbar-burger burger" onClick={this.toggleState}>
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* navbar menu */}
          <div className="navbar-menu">
            <div className="navbar-start" />
            <div className="navbar-end">
              <div className="navbar-item" id="art-button-nav">
                <div className="field">
                  <p className="control">
                    <Link
                      className="button login-button"
                      to={"/editart:" + this.state.artist}
                    >
                      {/* <span className="icon">
                      <i className="fas fa-sign-out-alt" />
                    </span> */}
                      <span>Artwork</span>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="navbar-item" id="profile-button-nav">
                <div className="field">
                  <p className="control">
                    <Link
                      className="button login-button"
                      to={"/editinfo:" + this.state.artist}
                    >
                      {/* <span className="icon">
                      <i className="fas fa-sign-out-alt" />
                    </span> */}
                      <span>Profile</span>
                    </Link>
                  </p>
                </div>
              </div>

              {/* Login/Signup */}
              <div className="navbar-item" id="login-button-nav">
                <div className="field">
                  <p className="control">
                    <a
                      className="button login-button"
                      onClick={this.handleSignInModalOpen}
                      id="signInModalOpen"
                    >
                      <span>Login</span>
                      <span className="icon">
                        <i className="fas fa-sign-in-alt" />
                      </span>
                    </a>
                  </p>
                </div>
              </div>

              <div className="navbar-item" id="logout-button-nav">
                <div className="field">
                  <p className="control">
                    <Link
                      className="button login-button"
                      onClick={this.handleLogout}
                      id="signInModalOpen"
                      to="/"
                    >
                      <span className="icon">
                        <i className="fas fa-sign-out-alt" />
                      </span>
                      <span>Logout</span>
                    </Link>
                  </p>
                </div>
              </div>

              {/* bottom nav categories */}
              <div className="navbar-item nav-div">
                <div className="categories-container">
                  <Link className="nav-categories" to="/medium=Mixed%20Media">
                    Mixed Media
                  </Link>
                  <Link className="nav-categories" to="/medium=Ceramics">
                    Ceramics
                  </Link>
                  <Link className="nav-categories" to="/medium=Drawing">
                    Drawing
                  </Link>
                  <Link className="nav-categories" to="/medium=Illustration">
                    Illustration
                  </Link>
                  <Link className="nav-categories" to="/medium=Painting">
                    Painting
                  </Link>
                  <Link className="nav-categories" to="/medium=Photography">
                    Photography
                  </Link>
                  <Link className="nav-categories" to="/medium=Sculpture">
                    Sculpture
                  </Link>
                  <Link className="nav-categories" to="/medium=Glass%20Works">
                    Glass Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {menu}
      </div>
    );
  }
}
export default Nav;
