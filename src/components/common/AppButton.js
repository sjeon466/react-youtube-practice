import React, { Component } from "react";

class AppButton extends Component {
  render() {
    const svgSrc = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path style="fill:#0e0e0e"; d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" class="style-scope yt-icon"></path>
  </g></svg>`;
    const style = {
      background: "transparent",
      border: "none",
      boxSizing: "border-box",
      color: "transparent",
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
        onClick={this.handleClick}
        className="svgButton"
        style={style}
        dangerouslySetInnerHTML={{ __html: svgSrc }}
      />
    );
  }
}

export default AppButton;
