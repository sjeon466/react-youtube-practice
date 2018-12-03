import React, { Component } from "react";

class HomeImage extends Component {
  render() {
    const svgSrc = `<svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    class="style-scope yt-icon"
    style="pointer-events: none; display: block; width: 100%; height: 100%;"
  >
    <g class="style-scope yt-icon">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" class="style-scope yt-icon" />
    </g>
  </svg>;`;
    const style = {
      cursor: "pointer",
      background: "transparent",
      height: 24,
      width: 24,
      marginRight: 24
    };
    return (
      <div
        className="svgImage"
        style={style}
        dangerouslySetInnerHTML={{ __html: svgSrc }}
      />
    );
  }
}

export default HomeImage;
