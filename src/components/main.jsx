import React, { Component } from "react";
import { getTopics } from "./../services/fakeTopicServices";
import VideoList from "./videoList";
class Main extends Component {
  state = {};
  render() {
    const topics = getTopics();
    return (
      <div className="mainContainer">
        <div className="ttttt">
          {topics.map(topic => (
            <div className="topic" key={topic.title}>
              <VideoList
                className="ttt"
                videoEntries={topic.videos}
                currentTopic={topic.title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
