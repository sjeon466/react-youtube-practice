import React, { Component } from "react";
import SearchBar from "./common/searchBar";
import MenuButton from "./common/menuButton";
import "./navBar.css";
import VideoButton from "./common/videoButton";
import SearchButton from "./common/searchButton";
import Logo from "./common/logo";
import AppButton from "./common/appButton";
import RecordButton from "./common/recordButton";
import SettingsButton from "./common/settingsButton";
import SignIn from "./common/signIn";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <div className="leftContainer">
          <div className="menuButton">
            <MenuButton />
          </div>
          <div className="logoWrapper flex-center">
            <Logo />
          </div>
        </div>
        <div className="searchContainer">
          <div className="searchBarWrapper">
            <SearchBar className="input" />
          </div>
          <div className="flex-center">
            <SearchButton />
          </div>
        </div>
        <div className="rightContainer flex-center">
          <div className="flex-center">
            <RecordButton />
          </div>
          <div className="flex-center">
            <AppButton />
          </div>

          <div className="flex-center">
            <VideoButton />
          </div>
          <div className="flex-center">
            <SettingsButton />
          </div>
          <div className="signIn flex-center">
            <SignIn />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
