import React, { Component } from "react";
import { makeImgfromSrc } from "./utils/imageUtils";
//import { getEntries } from "./../services/fakeTopicServices";
import "./videoList.css";

class VideoList extends Component {
  render() {
    const { videoEntries, currentTopic } = this.props;
    return (
      <div className="topicContainer">
        <div className="topicTextContainer">
          <p className="topicText">{currentTopic}</p>
        </div>

        <div className="videoListContainer">
          {videoEntries.map(entry => (
            <div className="videoEntryContainer" key={entry.id}>
              <div>{makeImgfromSrc(entry.videoUrl, 210, 121.5)}</div>
              <div className="videoTextContainer">
                <p className="title">{entry.videoTitle}</p>
                <div
                  id="metadata"
                  className="style-scope ytd-grid-video-renderer"
                >
                  <p className="creator">{entry.videoCreator}</p>
                  <div
                    id="metadata-line"
                    className="style-scope ytd-grid-video-renderer"
                  >
                    <span className="style-scope ytd-grid-video-renderer">
                      {entry.numViews} ·
                    </span>
                    <span className="style-scope ytd-grid-video-renderer">
                      {entry.createdTime} ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VideoList;
