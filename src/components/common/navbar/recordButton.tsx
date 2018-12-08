import * as React from "react";

export interface IProps {
  className: string;
}

class RecordButton extends React.Component<IProps, {}> {
  public render() {
    const svgSrc = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" "><g class="style-scope yt-icon">
        <path style="fill:rgba(17,17,17,0.4);"d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" ></path>
      </g></svg>`;
    const style = {
      backgroundColor: "rgba(0,0,0,0)",
      border: "none",
      borderColor: "rgba(17,17,17 0.4)",
      boxSizing: "border-box",
      color: "rgba(17,17,17 0.4)",
      cursor: "pointer",
      display: "block",
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: 0,
      height: 40,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      position: "relative",
      width: 40
    } as React.CSSProperties;
    return (
      <button
        className="recordButton"
        style={style}
        dangerouslySetInnerHTML={{ __html: svgSrc }}
      />
    );
  }
}

export default RecordButton;
