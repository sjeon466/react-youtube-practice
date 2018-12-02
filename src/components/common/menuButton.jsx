import React, { Component } from "react";

class MenuButton extends Component {
  render() {
    const svgSrc = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path style="fill:#111111;" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="style-scope yt-icon"></path>
  </g></svg>`;
    const style = {
      background: "transparent",
      border: "none",
      boxSizing: "border-box",
      display: "block",
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: 0,
      height: 40,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 16,
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

export default MenuButton;
