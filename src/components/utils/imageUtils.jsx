import React from "react";

export function makeImgfromSrc(url, width = 40, height = 40, isCategoryIcon) {
  let style = { width, height };
  if (isCategoryIcon) {
    style = { ...style, borderRadius: "50%" };
  }
  return <img src={url} alt="icon" style={style} />;
}

function createMarkup(svgSource) {
  return {
    __html: `${svgSource}`
  };
}

export function makeImgFromSvg(svgSource, width = 40, height = 40) {
  return (
    <div
      style={{ width: width, height: height }}
      dangerouslySetInnerHTML={createMarkup(svgSource)}
    />
  );
}
