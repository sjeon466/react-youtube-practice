import { Component } from "react";
import { makeButtonfromSvg } from "../utils/buttonUtils";

class MenuButton extends Component {
  render() {
    const button = {
      svgSource: `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="style-scope yt-icon"></path>
    </g></svg>`,
      width: 24,
      height: 24,
      color: "white",
      borderType: "dotted"
    };
    return makeButtonfromSvg(button);
  }
}

export default MenuButton;
