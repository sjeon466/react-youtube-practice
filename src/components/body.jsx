import React, { Component } from "react";
import SideBar from "./sideBar";
import Main from "./main";
import "./body.css";

class Body extends Component {
  state = {};
  render() {
    let sBarClasses = "sideBarShadow";
    if (!this.props.isSideDrawerOpen) {
      sBarClasses = "sideBarShadow close";
    }

    return (
      <div className="outerBodyContainer">
        <div className="bodyContainer">
          <div className={sBarClasses}>
            <div className="sideBarContainer">
              <div className="sideBarContent">
                <SideBar className="sideBar" />
              </div>
            </div>
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
