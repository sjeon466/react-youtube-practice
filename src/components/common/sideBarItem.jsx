import React, { Component } from "react";
import { makeImgfromSrc, makeImgFromSvg } from "./../utils/imageUtils";
import "./sideBarItem.css";

class SideBarItem extends Component {
  state = {};

  render() {
    const { items } = this.props;
    return (
      <div className="list">
        {items.map(item => (
          <div className="sideBarItem" key={item.text}>
            {item.svg ? (
              <div>{makeImgFromSvg(item.svg)}</div>
            ) : (
              <div>
                {makeImgfromSrc(item.imgUrl, undefined, undefined, true)}
              </div>
            )}
            <div className="text">{item.text}</div>
          </div>
        ))}
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
