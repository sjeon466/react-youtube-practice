import React, { Component } from "react";
import { makeImgfromSrc } from "./utils/imageUtils";
//import { getEntries } from "./../services/fakeTopicServices";
import "./videoList.css";

class VideoList extends Component {
  render() {
    const { videoEntries, currentTopic } = this.props;
    return (
      <div className="topicContainer">
        <div>
          <p className="topicText">{currentTopic}</p>
        </div>

        <div className="videoListContainer">
          {videoEntries.map(entry => (
            <div className="videoEntryContainer" key={entry.id}>
              <div>{makeImgfromSrc(entry.videoUrl, 210, 117.5)}</div>
              <div className="videoTextContainer">
                <p className="title">{entry.videoTitle}</p>
                <p className="content">{entry.videoCreator}</p>
                <p className="content">
                  {entry.numViews} views · {entry.createdTime} ago{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VideoList;
