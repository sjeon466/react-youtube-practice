import * as React from 'react';
import './metaDataBadgeImage.css';

class MetaDataBadgeImage extends React.Component {
  public render(): JSX.Element {
    const src = (
      <svg
        className="metaDataBadgeImage"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g>
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z" />
        </g>
      </svg>
    );

    return <div className="MetaDataBadgeImage">{src}</div>;
  }
}

export default MetaDataBadgeImage;
