import * as React from "react";
import "./videoTimeText.css";

interface IProps {
  className: string;
}

class VideoTimeText extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className="main__videoTimeTextContainer">
        <div className="main__videoTimeText">12:14</div>
      </div>
    );
  }
}

export default VideoTimeText;
