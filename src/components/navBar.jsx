import React, { Component } from "react";
import Search from "./common/search";
import MenuButton from "./common/menuButton";
import Logo from "./common/logo";
import AppButton from "./common/appButton";
import SettingsButton from "./common/settingsButton";
import SignIn from "./common/signIn";
import RecordButton from "./common/recordButton";
import MessageButton from "./common/messageButton";
import "./navBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <div className="leftContainer">
          <div className="menuButton">
            <MenuButton
              className="navbar__button"
              onClick={this.props.onMenuButtonClick}
            />
          </div>
          <div className="logoWrapper flex-center">
            <Logo />
          </div>
        </div>
        <div className="searchContainer">
          <div className="searchBarWrapper">
            <Search className="search" />
          </div>
        </div>
        <div className="rightContainer flex-center">
          <div className="flex-center">
            <RecordButton className="navbar__button" />
          </div>
          <div className="flex-center">
            <AppButton className="navbar__button" />
          </div>
          <div className="flex-center">
            <MessageButton className="navbar__button" />
          </div>
          <div className="flex-center">
            <SettingsButton className="navbar__button" />
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
