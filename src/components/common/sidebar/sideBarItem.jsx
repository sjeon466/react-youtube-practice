import React, { Component } from "react";
import SideTopImage from "./sideTopImage";
import "./sideBarItem.css";

class SideBarItem extends Component {
  render() {
    const { svgSrc, text } = this.props;

    return (
      <div className="sideItemContainer">
        <a className="sampleATag" href="./">
          <SideTopImage svgSrc={svgSrc} />
          <h5 className="sidebarItemText">{text}</h5>
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
