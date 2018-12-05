import React, { Component } from "react";
import "./sideBarTopImage.css";

class SideTopImage extends Component {
  render() {
    const { svgSrc } = this.props;
    return <div className="imageWrapper">{svgSrc}</div>;
  }
}

export default SideTopImage;
