import React, { Component } from "react";

class PracticeItem extends Component {
  render() {
    const imgurl =
      "//yt3.ggpht.com/FDaq8KXRu4K5nDsDY9jaCMLYmZjtHaKJn46pbYa4RDpP8HNhIJqTsgX0pdDwew7cqmeiW8Dh-6S_RmZmnzA=s88-nd-c-c0xffffffff-rj-k-no";
    const text = "Music";
    return (
      <div>
        <h1>text</h1>
        <img src={imgurl} alt="icon" style={{ width: 40, height: 40 }} />
      </div>
    );
  }
}

export default PracticeItem;
