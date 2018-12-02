import React, { Component } from "react";

class SearchButton extends Component {
  render() {
    const svgSrc = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path>
  </g></svg>`;
    const style = {
      backgroundColor: "transparent",
      border: 1,
      borderColor: "rgb(211,211,211)",
      borderStyle: "solid",
      boxSizing: "border-box",
      color: "rgba(17,17,17,0.4)",
      display: "block",
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: 0,
      height: "32px",
      paddingBottom: 1,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 1,
      position: "relative",
      width: "65px"
    };
    return (
      <button
        id="search-icon"
        onClick={this.handleClick}
        className="svgButton"
        style={style}
        dangerouslySetInnerHTML={{ __html: svgSrc }}
      />
    );
  }
}

export default SearchButton;
