import React from "react";

function createMarkup(svgSource) {
  return {
    __html: `${svgSource}`
  };
}

export function makeButtonComponent({
  svgSource,
  width,
  height,
  color,
  borderType
}) {
  return (
    <button
      style={{
        width: width,
        height: height,
        backgroundColor: "white",
        border: { borderType }
      }}
      dangerouslySetInnerHTML={createMarkup(svgSource)}
    />
  );
}
