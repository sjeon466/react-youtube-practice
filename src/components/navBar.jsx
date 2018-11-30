import React, { Component } from "react";
import SearchBar from "./common/searchBar";
import MenuButton from "./common/menuButton";
import "./navBar.css";
import VideoButton from "./common/videoButton";
import SearchButton from "./common/searchButton";
import Logo from "./common/logo";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <div className="leftContainer">
          <div className="buttonWrapper">
            <MenuButton />
          </div>
          <div className="logoWrapper flex-center">
            <Logo />
          </div>
        </div>
        <div className="searchContainer">
          <div className="searchBarWrapper">
            <SearchBar className="searchBar" />
          </div>
          <div className="flex-center">
            <SearchButton />
          </div>
          <div>
            <h1>222</h1>
          </div>
        </div>
        <div className="rightContainer flex-center">
          <div>
            <h3>333-111</h3>
          </div>

          <div className="flex-center">
            <VideoButton />
          </div>
          <div>
            <h3>333-222</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
