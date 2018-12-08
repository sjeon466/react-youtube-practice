import * as React from "react";
import "./signIn.css";

export interface IProps {
  className: string;
}

const SignIn = () => {
  return (
    <div id="signInContainer">
      <a className="signInLink" href="./">
        로그인
      </a>
    </div>
  );
};

export default SignIn;
