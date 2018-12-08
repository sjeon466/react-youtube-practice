import "./sideBarHeader.css";

import * as React from "react";

import Logo from "./common/navbar/logo";
import MenuButton from "./common/navbar/menuButton";

export interface IProps {
  className: string;
  onMenuButtonClick(): void;
}
class SideBarHeader extends React.Component<IProps> {
  public render() {
    return (
      <div className="sideBar__HeaderContainer ">
        <MenuButton
          className="navbar__button menuButton flex-center"
          onClick={this.props.onMenuButtonClick}
        />
        <Logo />
      </div>
    );
  }
}

export default SideBarHeader;
