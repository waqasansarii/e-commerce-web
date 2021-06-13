import React from "react";
import "./Form.css";
// assets
import userIcon from "../../Assets/user-icon.png";
import eyeIcon from "../../Assets/eye-icon.png";
import lockIcon from "../../Assets/lock-icon.png";
const SignupTwo = () => {
  return (
    <React.Fragment>
      <div className="signup_content">
        <div>
          <h2>Create Account</h2>
        </div>
        <form action="#" className="s_form s2_form">
          <div>
            <img src={userIcon} alt="..." />
            <input type="text" placeholder="Email Address" />
          </div>
          <div>
            <div>
              <img src={lockIcon} alt="..." />
              <input type="password" placeholder="Password" />
            </div>
            <img src={eyeIcon} alt="..." />
          </div>
          <div>
            <div>
              <img src={lockIcon} alt="..." />
              <input type="password" placeholder="Re-Type Password" />
            </div>
            <img src={eyeIcon} alt="..." />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignupTwo;
