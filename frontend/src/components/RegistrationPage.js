import React, { useState } from "react";
import "../Styling Using CSS/pageStyling.css";
import apple from "../utils/apple-logo.png";
import google from "../utils/google-logo.png";
import fb from "../utils/facebook-logo.png";

const RegistrationPage = () => {
  const [acceptAgreement, setAccept] = useState(false);

  function agreementAccept() {
    setAccept(true);
  }

  function agreementNotAccept() {
    setAccept(false);
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    height: "100vh",
  };

  return (
    <div style={{ containerStyle }}>
      <div className="page-design">
        {/* Heading of the page */}
        <h1 style={{ fontSize: "40px", marginLeft: "30px" }}>
          FIT <span style={{ color: "#f54242" }}>HUB</span>
        </h1>
        {/* Sign In Text */}
        <div style={{ margin: "30px" }}></div>
        <h3 style={{ marginLeft: "30px" }}>Sign Up</h3>
        {/* Registration First Name Input */}
        <div class="input-container">
          <input type="text" placeholder="First Name" />
        </div>
        {/* Registration Last Name Input */}
        <div class="input-container">
          <input type="text" placeholder="Last Name" />
        </div>
        {/* Login Email Input */}
        <div class="input-container">
          <input type="text" placeholder="Email" />
        </div>
        {/* Password */}
        <div class="input-container">
          <input type="password" placeholder="Password" />
        </div>
        {/* Button Design */}
        <div>
          <button className="button-color button-align">Sign In</button>
        </div>
        {/* Forgot Password */}
        {/* Accepting of policy */}

        <label>
          <input
            type="radio"
            checked={acceptAgreement}
            onClick={acceptAgreement ? agreementNotAccept : agreementAccept}
          />
          <span
            style={{
              opacity: acceptAgreement ? 1 : 0.5,
            }}
          >
            By continuing you accept our Privacy Policy
          </span>
        </label>
        {/* Gap btw forgot password and sign in */}
        <div style={{ height: "40px" }}></div>
        {/* Sign In With */}
        <div style={{ marginLeft: "30px" }}>
          <text style={{ alignContent: "center" }}>Sign up with</text>
        </div>
        {/* Login methods images */}
        <div style={{ marginLeft: "30px" }}>
          <img
            src={apple}
            width={"25px"}
            height={"25px"}
            style={{ margin: "7px" }}
          ></img>
          <img
            src={fb}
            width={"25px"}
            height={"25px"}
            style={{ margin: "7px" }}
          ></img>
          <img
            src={google}
            width={"25px"}
            height={"25px"}
            style={{ margin: "7px", borderRadius: "50%" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
