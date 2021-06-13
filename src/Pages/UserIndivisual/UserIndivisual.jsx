import React from "react";
import SideBar from "../../Components/SideBar";
import BackUserBtn from "../../Components/Button/BackUserBtn";
import "./UserIndivisual.css";

const UserIndivisual = () => {
  return (
    <React.Fragment>
      <SideBar />
      <div className="user_indivisual_section">
        <BackUserBtn />
        <div className="uif_box">
          <h2>User Information</h2>
          <div className="user_info_form">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserIndivisual;
