import React, { Component } from "react";
import {
  getBasicItems,
  getCategoryItems
} from "./../services/fakeSideBarServices";
import SideBarItem from "./common/sideBarItem";

class SideBar extends Component {
  state = {};
  render() {
    const basicItems = getBasicItems();
    const categoryItems = getCategoryItems();
    return (
      <div>
        <div>
          <SideBarItem items={basicItems} />
        </div>
        <hr className="hr" />
        <h4>BEST OF YOUTUBE</h4>
        <div>
          <SideBarItem items={categoryItems} />
        </div>
        <hr className="hr" />
      </div>
    );
  }
}

export default SideBar;
