import React, {useState } from "react";
import tree from "../../assets/Rectangle 1.png";
import amazonLogo from "../../assets/amazon.png";
import banyanTree from "../../assets/Rectangle 4.png";
import "./Login.css";
import google from "../../assets/Group 9.png";
import facebook from "../../assets/Rectangle 17.png";
import errorImg from "../../assets/Group 2.svg";

function Login() {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();

  // email validation
  const isValidEmail = /\S+@\S+\.\S+/.test(email);

  if (!isValidEmail) {
    setEmailError("Please enter a valid email address.");
    return;
  }

 
  console.log("Email:", email);
  console.log("Password:", password);


  setEmail("");
  setPassword("");
  setEmailError("");
};

  return (
    <div className="login">
      <img src={tree} alt="tree-bg" className="bg-img" />
      <div className="login_form_container">
        <div className="login_form_banner">
          <img src={amazonLogo} alt="amazon logo" />
        </div>
        <form>
          <h2>Login</h2>
          <img src={banyanTree} alt="banyan" />
         
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={handleEmailChange}
              placeholder="Email"
            />
       
       {emailError && (
                  <div className="errMsg">
      <img src={errorImg} alt="error" className="svg" />
      <p className="error-text"> The email field is required</p>
    </div>
            )}
         
            
            <input
              type="password"
              onChange={handlePasswordChange}
              value={password}
              name="passWord"
              id="password"
              placeholder="Password"
            />

          <input
            type="submit"
            value="sign in"
            className="submit"
            onClick={handleSubmit}
          />
          <p className="login_form_options">
            <span>Forgot Password?</span>{" "}
            <span className="error-text">New User? Sign Up</span>
          </p>
          <p className="login_form_or">or</p>
          <button className="social_btn" onClick={(e) => e.preventDefault()}>
            <img src={google} alt="google-logo" />
            continue with google
          </button>
          <button className="social_btn" onClick={(e) => e.preventDefault()}>
            <img src={facebook} alt="facebook-logo" />
            continue with facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;