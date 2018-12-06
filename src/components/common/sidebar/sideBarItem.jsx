import React, { Component } from "react";
import SideItemImage from "./sideItemImage";
import "./sideBarItem.css";

class SideBarItem extends Component {
  render() {
    const { src, text, isRound, isSvg } = this.props;
    return (
      <div className="sideItemContainer">
        <a className="sampleATag" href="./">
          <SideItemImage src={src} isRound={isRound} isSvg={isSvg} />
          <h2 className="sidebarItem__Text">{text}</h2>
        </a>
      </div>
    );
  }
}
export default SideBarItem;

/* {
  <div className="sideBarItem" key={item.text}>
  {item.svg ? (
    <div>{makeImgFromSvg(item.svg)}</div>
  ) : (
    <div>{makeImgfromSrc(item.imgUrl, undefined, undefined, true)}</div>
  )}
  <div className="text">{item.text}</div>
</div>;

} */
