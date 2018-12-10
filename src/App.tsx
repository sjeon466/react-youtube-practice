import './App.css';

import * as React from 'react';

import Body from './components/body';
import NavBar from './components/navBar';

export interface IState {
  sideDrawerOpen: boolean;
}

class App extends React.Component<{}, IState> {
  public state = {
    sideDrawerOpen: true,
  };

  public render(): JSX.Element {
    return (
      <div className="App">
        <div className="navBar">
          <NavBar onMenuButtonClick={this.handleMenuButtonClick} />
        </div>
        <div className="body">
          <Body isSideDrawerOpen={this.state.sideDrawerOpen} />
        </div>
      </div>
    );
  }

  private handleMenuButtonClick = (): void => {
    this.setState((prevState: IState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
}

export default App;
