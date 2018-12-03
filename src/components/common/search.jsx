import React, { Component } from "react";
import "./search.css";
import SearchButton from "./searchButton";
class searchBar extends Component {
  state = {};
  render() {
    return (
      <div className="searchForm">
        <div className="container">
          <div className="searchInput">
            <input className="sInput" type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <SearchButton className="navbar__button" />
        </div>
      </div>
    );
  }
}

export default searchBar;
