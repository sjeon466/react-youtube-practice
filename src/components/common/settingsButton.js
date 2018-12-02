import { makeButtonfromSvg } from "../utils/buttonUtils";
const SettingsButton = () => {
  const button = {
    svgSource: `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path>
  </g></svg>`,
    width: 24,
    height: 24,
    color: "white",
    borderType: "none"
  };

  return makeButtonfromSvg(button);
};

export default SettingsButton;
