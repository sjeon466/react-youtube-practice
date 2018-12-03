import React, { Component } from "react";

class SideBarButton extends Component {
  render() {
    const svgSrc = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" class="style-scope yt-icon"></path>
  </g></svg>`;
    const style = {
      cursor: "pointer",
      background: "transparent",
      border: "none",
      boxSizing: "border-box",
      color: "black",
      display: "block",
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: 0,
      height: 40,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      position: "relative",
      width: 40
    };
    return (
      <button
        className="svgButton"
        style={style}
        dangerouslySetInnerHTML={{ __html: svgSrc }}
      />
    );
  }
}

export default SideBarButton;
