import React, { Component } from "react";
import SideBarItem from "./common/sideBarItem";
import HomeImage from "./common/homeImage";
import {
  getBasicItems,
  getCategoryItems
} from "./../services/fakeSideBarServices";
import "./sideBar.css";

class SideBar extends Component {
  state = {};
  render() {
    const basicItems = getBasicItems();
    const categoryItems = getCategoryItems();
    return (
      <div className="sideBarContainer">
        <div className="sideItemContainer">
          <a id="sampleATag" href="./">
            <HomeImage />
            <h5 class="sidebarItemText">Watch Later</h5>
          </a>
        </div>
        <div>
          <SideBarItem className="text" items={basicItems} />
        </div>
        <hr className="hr" />
        <h4 className="text">BEST OF YOUTUBE</h4>
        <div>
          <SideBarItem items={categoryItems} />
        </div>
        <hr className="hr" />
      </div>
    );
  }
}

export default SideBar;
