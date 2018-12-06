import React, { Component } from "react";
import MenuButton from "./common/navbar/menuButton";
import Logo from "./common/navbar/logo";
import "./sideBarHeader.css";

class SideBarHeader extends Component {
  state = {};
  render() {
    return (
      <div className="sideBar__HeaderContainer ">
        <MenuButton
          className="navbar__button menuButton flex-center"
          onClick={this.props.onMenuButtonClick}
        />
        <Logo className="logoWrapper flex-center" />
      </div>
    );
  }
}

export default SideBarHeader;
