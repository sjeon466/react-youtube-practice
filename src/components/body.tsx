import * as React from "react";
import "./body.css";
import Main from "./main";
import SideBar from "./sideBar";

export interface IProps {
  isSideDrawerOpen: boolean;
}

class Body extends React.Component<IProps> {
  public render() {
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
