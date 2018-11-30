import React, { Component } from "react";
import { makeImgfromSrc } from "./utils/imageUtils";
//import { getEntries } from "./../services/fakeTopicServices";
import "./videoList.css";

class VideoList extends Component {
  render() {
    const { videoEntries, currentTopic } = this.props;
    return (
      <div className="videoListContainer">
        <div>
          <h5>{currentTopic}</h5>
        </div>
        {videoEntries.map(entry => (
          <div className="movieEntryContainer" key={entry.id}>
            <div>{makeImgfromSrc(entry.videoUrl, 160, 110)}</div>
            <h3>{entry.videoTitle}</h3>
            <h4>{entry.videoCreator}</h4>
            <h5>
              {entry.numViews} views · {entry.createdTime} ago{" "}
            </h5>
          </div>
        ))}
      </div>
    );
  }
}

export default VideoList;
