import React, { Component } from "react";

class SearchButton extends Component {
  render() {
    const svgSrc = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path style="fill:rgba(17,17,17,0.4);" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path>
  </g></svg>`;
    const style = {
      cursor: "pointer",
      backgroundColor: "rgb(240,240,240)",
      alignItems: "flex-start",
      borderBottomColor: "rgb(211, 211, 211)",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "2px",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderImageOutset: "0px",
      borderImageRepeat: "stretch",
      borderImageSlice: "100%",
      borderImageSource: "none",
      borderImageWidth: 1,
      borderLeftColor: "rgb(211, 211, 211)",
      borderLeftStyle: "solid",
      borderLeftWidth: "1px",
      borderRightColor: "rgb(211, 211, 211)",
      borderRightStyle: "solid",
      borderRightWidth: "1px",
      borderTopColor: "rgb(211, 211, 211)",
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "2px",
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      boxSizing: "borderBox",
      color: "rgb(0, 0, 0)",
      cursor: "pointer",
      display: "block",
      fontFamily: "Arial",
      fontSize: "13.3333px",
      fontStretch: "100%",
      fontStyle: "normal",
      fontVariantCaps: "normal",
      fontVariantEastAsian: " normal",
      fontVariantLigatures: "normal",
      fontVariantNumeric: " normal",
      fontWeight: " 400",
      height: "32px",
      letterSpacing: "normal",
      lineHeight: " normal",
      marginBottom: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      marginTop: " 0px",
      paddingBottom: "1px",
      paddingLeft: "6px",
      paddingRight: "6px",
      paddingTop: "1px",
      textAlign: "center",
      textIndent: "0px",
      textRendering: " auto",
      textShadow: "none",
      textTransform: "none",
      width: "65px",
      wordSpacing: "0px"
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
