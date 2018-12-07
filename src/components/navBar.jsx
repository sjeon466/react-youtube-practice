import React, { Component } from "react";
import Search from "./common/navbar/search";
import MenuButton from "./common/navbar/menuButton";
import Logo from "./common/navbar/logo";
import AppButton from "./common/navbar/appButton";
import SettingsButton from "./common/navbar/settingsButton";
import SignIn from "./common/navbar/signIn";
import RecordButton from "./common/navbar/recordButton";
import MessageButton from "./common/navbar/messageButton";
import "./navBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <div className="navBar__leftContainer">
          <div className="menuButton flex-center">
            <MenuButton
              className="navbar__button"
              onClick={this.props.onMenuButtonClick}
            />
          </div>
          <div className="logoWrapper flex-center">
            <Logo className="navBar__logo" />
          </div>
        </div>
        <Search className="navBar__searchCl" />
        <div className="rightContainer flex-center">
          <div className="flex-center buttonMarginRight">
            <RecordButton className="navbar__button" />
          </div>
          <div className="flex-center buttonMarginRight">
            <AppButton className="navbar__button" />
          </div>
          <div className="flex-center buttonMarginRight">
            <MessageButton className="navbar__button" />
          </div>
          <div className="flex-center buttonMarginRight">
            <SettingsButton className="navbar__button" />
          </div>

          <SignIn />
        </div>
      </div>
    );
  }
}

export default NavBar;
