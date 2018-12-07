import React, { Component } from "react";
import "./thumbNailImage.css";

class ThumbNailImage extends Component {
  render() {
    const { src } = this.props;
    return (
      <img
        className="main__thumbNailImage"
        alt=""
        src={src}
        style={{ height: "118px", width: "210px" }}
      />
    );
  }
}

export default ThumbNailImage;
