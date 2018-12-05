import React, { Component } from "react";
import "./homeImage.css";

class HomeImage extends Component {
  render() {
    return (
      <svg
        className="homeSvg"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" />
        </g>
      </svg>
    );
  }
}

export default HomeImage;
