import React, { Component } from "react";

import "./searchBar.css";
class searchBar extends Component {
  state = {};
  render() {
    return (
      <div id="outerContainer">
        <div className="searchForm">
          <div className="container">
            <div className="searchInput">
              <input className="input" type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default searchBar;
