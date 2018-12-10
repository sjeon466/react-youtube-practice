import './navBar.css';

import * as React from 'react';

import AppButton from './common/navbar/appButton';
import Logo from './common/navbar/logo';
import MenuButton from './common/navbar/menuButton';
import MessageButton from './common/navbar/messageButton';
import RecordButton from './common/navbar/recordButton';
import Search from './common/navbar/search';
import SettingsButton from './common/navbar/settingsButton';
import SignIn from './common/navbar/signIn';

export interface IProps {
  onMenuButtonClick(): void;
}

export default class NavBar extends React.Component<IProps> {
  public render(): JSX.Element {
    return (
      <div className="navBar">
        <div className="navBar__leftContainer">
          <div className="menuButton flex-center">
            <MenuButton
              className="navbar__button"
              onClick={this.props.onMenuButtonClick}
            />
          </div>
          <div className="logoWrapper flex-center">
            <Logo />
          </div>
        </div>
        <Search className="navBar__searchCl" />
        <div className="rightContainer flex-center">
          <div className="flex-center buttonMarginRight">
            <RecordButton className="navbar__button" />
          </div>
          <div className="flex-center buttonMarginRight">
            <AppButton className="navbar__button" />
          </div>
          <div className="flex-center buttonMarginRight">
            <MessageButton className="navbar__button" />
          </div>
          <div className="flex-center buttonMarginRight">
            <SettingsButton className="navbar__button" />
          </div>

          <SignIn />
        </div>
      </div>
    );
  }
}
