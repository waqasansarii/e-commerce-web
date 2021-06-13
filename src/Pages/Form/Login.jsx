import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
// assets
import userIcon from "../../Assets/user-icon.png";
import lockIcon from "../../Assets/lock-icon.png";
import eyeIcon from "../../Assets/eye-icon.png";
import CCLogo from "../../Assets/CC_Logo_final 2.svg";
import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <React.Fragment>
      <div className="login_section">
        <div className="s_stepper">
          <Link to="/">
            <img src={CCLogo} alt="..."/>
          </Link>
          <div>
            <div className="s_stepper_content">
              <div className="signup_content">
                <div>
                  <h2>Login</h2>
                </div>
                <form action="#" className="s_form s2_form">
                  <div>
                    <img src={userIcon} alt="..."/>
                    <input type="text" placeholder="Email Address" />
                  </div>
                  <div>
                    <div>
                      <img src={lockIcon} alt="..." />
                      <input type="password" placeholder="Password" />
                    </div>
                    <img src={eyeIcon} alt="..."/>
                  </div>
                  <div className="fp_text">
                    <span>
                      Forgot Password? <strong>Reset</strong>
                    </span>
                  </div>
                </form>
              </div>
              <div>
                <Button variant="contained" className="stepper_btn">
                  LOGIN
                </Button>
              </div>
            </div>
            <div className="s_stepper_bottom">
              <span>
                © 2020 Collective Contract, Inc. All rights reserved. |{" "}
                <strong>Privacy</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="s_stepperimg s_img2"></div>
      </div>
    </React.Fragment>
  );
};

export default Login;
