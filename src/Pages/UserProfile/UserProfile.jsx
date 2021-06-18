import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <React.Fragment>
      <SideBar />

      <div className="user_profile_section">
        <div className="userprofile_form">
          <div className="up_r">
            <h2>Profile Information</h2>
            <form action="#" className="up_form">
              <div>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
            </form>
          </div>
          <div className="up_l">
            <h2>User Information</h2>
            <form action="#" className="up_form">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" />
              </div>
              <div>
                <label htmlFor="officephone">Office Phone</label>
                <input type="text" id="officephone" />
              </div>
              <div>
                <label htmlFor="cellphone">Cell Phone</label>
                <input type="text" id="cellphone" />
              </div>
            </form>
          </div>
        </div>
        <NavLink to="/admin">
          <Button>Admin Pannel</Button>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
