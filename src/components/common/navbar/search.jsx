import React, { Component } from "react";
import "./search.css";
import SearchButton from "./searchButton";
class searchBar extends Component {
  state = {};
  render() {
    return (
      <div className={"navbar__searchOuterContainer " + this.props.className}>
        <div className="navbar__searchContainer">
          <div className="navbar__searchFieldContainer">
            <input className="navbar__input" type="text" placeholder="검색" />
            <div className="navbar__keyboard">
              <a className="navbar__keyboardLink" alt="img" href="./">
                <img
                  className="navbar__keyboardImg"
                  alt="img"
                  src="//www.gstatic.com/inputtools/images/tia.png"
                />
              </a>
            </div>
          </div>
          <SearchButton className="navbar__searchButton" />
        </div>
      </div>
    );
  }
}

export default searchBar;
