import React from "react";
import "./App.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

function App() {
  return (
    <div className="signup-container">
      <div className="img-1">
        <img src={img1} alt={"welcome"}></img>
      </div>
      <div className="img-2">
        <img src={img2} alt={"tree"}></img>
      </div>
      <div className="form-container">
        <p className="title">New Account?</p>
        <form className="signup-form">
          <div className="form-item fullname">
            <input type="text" placeholder="Your Full Name" />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-item email">
            <input type="text" placeholder="Your Email" />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="form-item password">
            <input type="password" placeholder="Your Password" />
            <i className="fas fa-key"></i>
          </div>
          <div className="form-item confirm-password">
            <input type="password" placeholder="Confirm Your Password" />
            <i className="fas fa-user-lock"></i>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
