import * as React from 'react';
import './thumbNailImage.css';

interface IProps {
  src: string;
  className: string;
}

class ThumbNailImage extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    const { src } = this.props;
    return (
      <img
        className="main__thumbNailImage"
        alt=""
        src={src}
        style={{ height: '118px', width: '210px' }}
      />
    );
  }
}

export default ThumbNailImage;
