import React, { Component } from "react";
import HomeImage from "./common/sidebar/homeImage";
/* import {
  getBasicItems,
  getCategoryItems
} from "./../services/fakeSideBarServices"; */
import "./sideBar.css";

class SideBar extends Component {
  state = {};
  render() {
    //const basicItems = getBasicItems();
    //const categoryItems = getCategoryItems();
    return (
      <div className="sideBarContainer">
        <div className="sideBarTopContainer">
          <div className="sideItemContainer">
            <a className="sampleATag" href="./">
              <HomeImage />
              <h5 class="sidebarItemText">Watch Later</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
