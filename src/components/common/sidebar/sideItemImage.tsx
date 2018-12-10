import * as React from 'react';
import './sideItemImage.css';

export interface IProps {
  src: React.ReactNode;
  isRound: boolean;
  isSvg: boolean;
}

class SideItemImage extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    const { src, isRound, isSvg } = this.props;
    let classes = 'sideItemImage__';
    classes = isSvg ? `${classes}svg` : `${classes}img`;
    classes = isRound ? `${classes} sideItem__round` : classes;
    return isSvg ? (
      <div className={classes}>{src}</div>
    ) : (
      <img className={classes} alt="" src={src as string} />
    );
  }
}

export default SideItemImage;
