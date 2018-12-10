import './videoTotal.css';

import * as React from 'react';

import { IVideo } from '../services/fakeTopicServices';
import MetaDataBadgeImage from './common/main/metaDataBadgeImage';
import ThumbNailImage from './common/main/thumbNailImage';
import VideoTimeText from './common/main/videoTimeText';
import WatchLaterButton from './common/main/watchLaterButton';

// import { getEntries } from "./../services/fakeTopicServices";

/*
  key={topic.title}
  videoEntries={topic.videos}
  currentTopic={topic.title}
*/

interface IProps {
  videoEntries: IVideo[];
  currentTopic: string;
}

class VideoTotal extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    const { videoEntries, currentTopic } = this.props;
    return (
      <div className="videoTotal__videoTotalContainer">
        <div className="videoTotal__videoListSubHeader">
          <p className="videoTotal__topicTitle">{currentTopic}</p>
        </div>

        <div className="videoTotal__videoListContainer">
          {videoEntries.map((entry) => (
            <div
              className="videoTotal__videoEntryOuterContainer"
              key={entry.id}
            >
              <div className="videoTotal__videoEntryInnerContainer">
                <ThumbNailImage
                  className="videoTotal__thumbNail"
                  src={entry.videoUrl}
                />
                <WatchLaterButton className="videoTotal__watchLaterButton" />
                <VideoTimeText className="videoTotal__videoTimeText" />
                <div className="videoTotal__videoEntryTextContainer">
                  <div className="videoTotal__videoEntryTextTitleWrapper">
                    <a href="./" className="videoTotal__videoEntryTextTitle">
                      {entry.videoTitle}
                    </a>
                  </div>
                  <div className="videoTotal__videoEntryTextMetadataContainer">
                    <div className="videoTotal__videoEntryTextByLineContainer">
                      <a
                        href="./"
                        className="videoTotal__videoEntryTextByLineText"
                      >
                        {entry.videoCreator}
                      </a>
                      <MetaDataBadgeImage />
                    </div>
                    <a
                      className="videoTotal__videoEntryTextMetadataLineLink"
                      href="./"
                    >
                      <span className="videoTotal__videoEntryTextMetadataLineSpan">
                        {entry.numViews}
                      </span>
                      <span className="videoTotal_dot">•</span>
                      <span className="videoTotal__videoEntryTextMetadataLineSpan">
                        {entry.createdTime} ago
                      </span>
                    </a>
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

export default VideoTotal;

/*
<p className="creator">{entry.videoCreator}</p>
<div id="metadata-line">
  <span>{entry.numViews} ·</span>
  <span>{entry.createdTime} ago</span>
</div> */
