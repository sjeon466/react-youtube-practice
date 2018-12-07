import React, { Component } from "react";
import SideBar from "./sideBar";
import Main from "./main";
import "./body.css";

class Body extends Component {
  state = {};
  render() {
    let shadowBarClasses = "sideBarShadow";
    let sideBarClasses = "sideBar";
    if (!this.props.isSideDrawerOpen) {
      shadowBarClasses = "sideBarShadow close";
      sideBarClasses = "side__Bar close";
    }

    return (
      <div className="outerBodyContainer">
        <div className="bodyContainer">
          <div className={shadowBarClasses}>
            <SideBar className={sideBarClasses} />
          </div>
          <div className="mainContainer">
            <Main className="main" />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
