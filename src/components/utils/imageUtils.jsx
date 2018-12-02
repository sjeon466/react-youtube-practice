import React from "react";

function createMarkup(svgSource) {
  return {
    __html: `${svgSource}`
  };
}

export function makeImgfromSrc(
  url,
  width = 40,
  height = 40,
  isCategoryIcon,
  linkUrl
) {
  let style = { width, height };
  if (isCategoryIcon) {
    style = { ...style, borderRadius: "50%" };
  }
  if (linkUrl) {
    return (
      <a href={linkUrl}>
        <img src={url} alt="icon" style={style} />
      </a>
    );
  }
  return <img src={url} alt="icon" style={style} />;
}

export function makeImgFromSvg(svgSource, width = 40, height = 40, linkUrl) {
  const markUp = createMarkup(svgSource);
  if (linkUrl) {
    return (
      <a href={linkUrl}>
        <div style={{ width, height }} dangerouslySetInnerHTML={markUp} />
      </a>
    );
  } else {
    return (
      <div
        style={{ width: width, height: height }}
        dangerouslySetInnerHTML={createMarkup(svgSource)}
      />
    );
  }
}
