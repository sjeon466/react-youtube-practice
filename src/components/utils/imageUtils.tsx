import * as React from 'react';

interface IDangerouslyHtmlElememt {
  __html: string;
}

function createMarkup(svgSource: React.ReactNode): IDangerouslyHtmlElememt {
  return {
    __html: `${svgSource}`,
  };
}

export function makeImgfromSrc(
  url: string,
  width = 40,
  height = 40,
  isCategoryIcon: boolean,
  linkUrl: string
): JSX.Element {
  let style: { width: number; height: number; borderRadius?: string } = {
    width,
    height,
  };
  if (isCategoryIcon) {
    style = { ...style, borderRadius: '50%' };
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
  width = 40,
  height = 40,
  linkUrl: string
): JSX.Element {
  const markUp = createMarkup(svgSource);
  if (linkUrl) {
    return (
      <a href={linkUrl}>
        <div style={{ width, height }} dangerouslySetInnerHTML={markUp} />
      </a>
    );
  }
  return (
    <div
      style={{ width, height }}
      dangerouslySetInnerHTML={createMarkup(svgSource)}
    />
  );
}
