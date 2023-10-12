import React from "react";
import "./TextBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const TextBox = () => {
  return (
    <div className="textAndLoginContainer">
      <div className="textContainer">
        <div className="headeText">
          <p>Generate Awesome Web Pages</p>
        </div>
        <div className="contentText">
          <p>
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>
        </div>
        <div>
          <button className="buttonBox">Learn More</button>
        </div>
      </div>

      <div className="signupContainer">
        <div className="signuNow">Sign Up Now</div>
        <div>
          <input type="email" id="emailPassword" placeholder="Your email" />
        </div>
        <div>
          <input
            type="password"
            id="emailPassword"
            placeholder="Your Password"
          ></input>
        </div>
        <div className="tearmsService">
          <label style={{ paddingLeft: "10px" }}>
            <input type="checkbox" id="checkBox" />I agree to the Terms of
            Service.
          </label>
        </div>
        <div>
          <button className="signinButton">Sign In</button>
        </div>
        <div className="horDivider">
          <div className="divider">
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <p className="or">or</p>
          <div className="divider">
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </div>
        <div>
          <button className="loginTwitter">Login via Twitter</button>
        </div>
        <div className="acountSignin">
          <p className="haveAccountText">Do you have an Account?</p>
          <a href="" className="haveAccountLink">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
