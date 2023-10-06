import React, { useState } from "react";
import "../Styling Using CSS/pageStyling.css";
import mainPageLogo from "../utils/main-page-logo.jpg";
import apple from "../utils/apple-logo.png";
import google from "../utils/google-logo.png";
import fb from "../utils/facebook-logo.png";

const SignInPage = () => {
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
        {/* This is the image of logo in a square container */}
        <div class="square-container" style={{ marginLeft: "25px" }}>
          <img src={mainPageLogo} alt="Your Image" />
        </div>
        {/* Heading of the page */}
        <h1 style={{ fontSize: "40px", marginLeft: "30px" }}>
          FIT <span style={{ color: "#f54242" }}>HUB</span>
        </h1>
        {/* Sign In Text */}
        <div style={{ margin: "30px" }}></div>
        <h3 style={{ marginLeft: "30px" }}>Sign In</h3>
        {/* Login Email/Phone Number Input */}
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
        <div
          style={{
            marginLeft: "30px",
            fontSize: "11px",
          }}
        >
          <text style={{ alignContent: "center" }}>Forgot Password?</text>
        </div>
        {/* Gap btw forgot password and sign in */}
        <div style={{ height: "40px" }}></div>
        {/* Sign In With */}
        <div style={{ marginLeft: "30px" }}>
          <text style={{ alignContent: "center" }}>Sign in with</text>
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
        {/* Register Page Link */}
        <text style={{ marginLeft: "30px" }}>
          Don't have an account? <a>Sign Up</a>
        </text>
      </div>
    </div>
  );
};

export default SignInPage;
