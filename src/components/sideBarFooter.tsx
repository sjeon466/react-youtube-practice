import * as React from "react";
import "./sideBarFooter.css";
class SideBarFooter extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="footerContainer">
        <div className="footer__guideLinkPrimaryContainer">
          <a className="foorter__a foooter__rightMarginText" href="./">
            정보
          </a>
          <a className="foorter__a foooter__rightMarginText" href="./">
            프레스
          </a>
          <a className="foorter__a foooter__rightMarginText" href="./">
            저작권
          </a>
          <a className="foorter__a foooter__rightMarginText" href="./">
            문의하기
          </a>
          <a className="foorter__a foooter__rightMarginText" href="./">
            크리에이터
          </a>
          <a className="foorter__a foooter__rightMarginText" href="./">
            광고
          </a>
          <a className="foorter__a" href="./">
            개발자
          </a>
        </div>
        <div className="footer__guideLinkSecondaryContainer">
          <a className="foorter__a foooter__rightMarginText" href="./">
            이용약관
          </a>
          <a className="foorter__a foooter__rightMarginText" href="./">
            개인정보 보호
          </a>

          <a className="foorter__a foooter__rightMarginText" href="./">
            정책 및 안전
          </a>
          <a className="foorter__a" href="./">
            새로운 기능 테스트하기
          </a>
        </div>
        <div className="footer__noticeContainer" />
        <div className="footer__copyRightContainer">
          <div className="footer__copyRightText">© 2018 YouTube, LLC</div>
        </div>
      </div>
    );
  }
}

export default SideBarFooter;
