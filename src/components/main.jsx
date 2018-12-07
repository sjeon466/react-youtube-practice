import React, { Component } from "react";
import { getTopics } from "./../services/fakeTopicServices";
import VideoTotal from "./videoTotal";
import "./main.css";
class Main extends Component {
  state = {};
  render() {
    const topics = getTopics();
    return (
      <div className="main__mainContainer">
        {topics.map(topic => (
          // two row for "Recommended Video Topic"
          <VideoTotal
            key={topic.title}
            videoEntries={topic.videos}
            currentTopic={topic.title}
          />
        ))}
      </div>
    );
  }
}

export default Main;
