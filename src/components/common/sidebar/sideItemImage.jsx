import React, { Component } from "react";
import "./sideItemImage.css";

class SideItemImage extends Component {
  render() {
    const { src, isRound, isSvg } = this.props;
    let classes = "sideItemImage__";
    classes = isSvg ? classes + "svg" : classes + "img";
    classes = isRound ? classes + " sideItem__round" : classes;
    return isSvg ? (
      <div className={classes}>{src}</div>
    ) : (
      <img className={classes} alt="" src={src} />
    );
  }
}

export default SideItemImage;
