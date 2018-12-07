import React, { Component } from "react";
import "./videoTimeText.css";

class VideoTimeText extends Component {
  state = {};
  render() {
    return (
      <div className="main__videoTimeTextContainer">
        <div className="main__videoTimeText">12:14</div>
      </div>
    );
  }
}

export default VideoTimeText;
