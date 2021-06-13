import React from "react";
import "./Form.css";
const Signup = () => {
  return (
    <React.Fragment>
      <div className="signup_content">
        <div>
          <h2>Create Account</h2>
        </div>
        <form action="#" className="s_form">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
          </div>
          <div>
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="number" id="phonenumber" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signup;
