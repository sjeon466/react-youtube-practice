import * as React from "react";

function createMarkup(svgSource: React.ReactNode) {
  return {
    __html: `${svgSource}`
  };
}

export function makeImgfromSrc(
  url: string,
  width: number = 40,
  height: number = 40,
  isCategoryIcon: boolean,
  linkUrl: string
) {
  let style: { width: number; height: number; borderRadius?: string } = {
    width,
    height
  };
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

export function makeImgFromSvg(
  svgSource: React.ReactNode,
  width: number = 40,
  height: number = 40,
  linkUrl: string
) {
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
        style={{ width, height }}
        dangerouslySetInnerHTML={createMarkup(svgSource)}
      />
    );
  }
}
