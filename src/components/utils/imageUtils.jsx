import React from "react";

export function makeImgfromSrc(url, width = 40, height = 40) {
  return <img src={url} alt="icon" style={{ width, height }} />;
}

function createMarkup(svgSource) {
  return {
    __html: `${svgSource}`
  };
}

export function makeImgFromSvg(svgSource, width = 40, height = 40) {
  return (
    <div
      style={{ width: width, height: height, color: "red" }}
      dangerouslySetInnerHTML={createMarkup(svgSource)}
    />
  );
}
