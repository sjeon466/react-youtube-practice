import React from "react";

function createMarkup(svgSource) {
  return {
    __html: `${svgSource}`
  };
}

export function makeButtonfromSvg({
  svgSource,
  width,
  height,
  color,
  borderType
}) {
  return (
    <button
      style={{
        backgroundColor: "rbga(0,0,0,0)",
        boxSizing: "border-box",
        color: "rgba(17, 17, 17, 0.4)",
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
      }}
      dangerouslySetInnerHTML={createMarkup(svgSource)}
    />
  );
}
