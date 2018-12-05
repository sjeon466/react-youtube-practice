import React, { Component } from "react";
/* import {
  getBasicItems,
  getCategoryItems
} from "./../services/fakeSideBarServices"; */

import SideBarItem from "./common/sidebar/sideBarItem";
import { getSideTopItems } from "./../services/fakeSideBarServices";
import "./sideBar.css";

class SideBar extends Component {
  render() {
    //const sideTopItems = getSideTopItems();
    //const categoryItems = getCategoryItems();
    const sideTopItems = getSideTopItems();
    console.log(sideTopItems);
    return (
      <div className="sideBarContainer">
        <div className="sideBarTopContainer">
          {sideTopItems.map(item => (
            <SideBarItem
              key={item.text}
              svgSrc={item.svgTag}
              text={item.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SideBar;
