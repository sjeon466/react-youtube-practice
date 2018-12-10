import './sideBar.css';

import * as React from 'react';
import {
  getCategoryItems,
  getChannelSearchItem,
  getSettingsItems,
  getSideTopItems,
  getYoutubeMoreItems,
} from './../services/fakeSideBarServices';
import SideBarItem from './common/sidebar/sideBarItem';
import SideBarFooter from './sideBarFooter';

export interface IProps {
  className: string;
}

class SideBar extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    // const sideTopItems = getSideTopItems();
    // const categoryItems = getCategoryItems();
    const topItems = getSideTopItems();
    const categoryItems = getCategoryItems();
    const channelSearchItem = getChannelSearchItem();
    const youtubeMoreItems = getYoutubeMoreItems();
    const settingsItems = getSettingsItems();
    return (
      <div className="sideBarContainer">
        <div className="sideBarTopContainer">
          {topItems.map((item) => (
            <SideBarItem
              key={item.text}
              src={item.src}
              text={item.text}
              isRound={item.isRound}
              isSvg={item.isSvg}
            />
          ))}
        </div>
        <div className="sideBarCategoryContainer containerBottomBorder">
          <div className="sideBarCategoryText">인기 YOUTUBE</div>
          {categoryItems.map((item) => (
            <SideBarItem
              key={item.text}
              src={item.src}
              text={item.text}
              isRound={item.isRound}
              isSvg={item.isSvg}
            />
          ))}
        </div>
        <div className="searchChannelItem containerBottomBorder">
          <SideBarItem
            key={channelSearchItem.text}
            src={channelSearchItem.src}
            text={channelSearchItem.text}
            isRound={channelSearchItem.isRound}
            isSvg={channelSearchItem.isSvg}
          />
        </div>
        <div className="sideBar__LogInContainer containerBottomBorder">
          <div className="sideBar__signInInstruct">
            지금 로그인하여 채널과 추천 동영상을 확인하세요!
          </div>
          <a className="sideBar__signInLink" href="./">
            <h2 className="sideBar__signInText">로그인</h2>
          </a>
        </div>
        <div className="sideBar__YoutubeMoreContainer containerBottomBorder">
          <div className="sideBarCategoryText">YOUTUBE 더보기</div>
          {youtubeMoreItems.map((item) => (
            <SideBarItem
              key={item.text}
              src={item.src}
              text={item.text}
              isRound={item.isRound}
              isSvg={item.isSvg}
            />
          ))}
        </div>
        <div className="sideBar__SettingsContainer containerBottomBorder">
          {settingsItems.map((item) => (
            <SideBarItem
              key={item.text}
              src={item.src}
              text={item.text}
              isRound={item.isRound}
              isSvg={item.isSvg}
            />
          ))}
        </div>
        <SideBarFooter />
      </div>
    );
  }
}

export default SideBar;
