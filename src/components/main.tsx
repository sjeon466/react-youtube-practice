import "./main.css";

import * as React from "react";

import { ITopic } from "../services/fakeTopicServices";
import { getTopics } from "./../services/fakeTopicServices";
import VideoTotal from "./videoTotal";

export interface IProps {
  className: string;
}

class Main extends React.Component<IProps, {}> {
  public render() {
    const topics = getTopics();
    return (
      <div className="main__mainContainer">
        {topics.map((topic: ITopic) => (
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
