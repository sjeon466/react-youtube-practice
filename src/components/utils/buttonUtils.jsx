import React from "react";

function createMarkup(svgSource) {
  return {
    __html: `${svgSource}`
  };
}

export function makeButtonComponent(svgSource, width = 40, height = 40) {
  return (
    <div>
      <button
        style={{ width: width, height: height, color: "red" }}
        dangerouslySetInnerHTML={createMarkup(svgSource)}
      />
    </div>
  );
}
