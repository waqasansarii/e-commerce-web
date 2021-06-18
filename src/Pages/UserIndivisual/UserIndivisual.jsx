import React from "react";
import SideBar from "../../Components/SideBar";
import BackUserBtn from "../../Components/Button/BackUserBtn";
import "./UserIndivisual.css";
// assets
import back_icon from "../../Assets/back_1.png";

const UserIndivisual = () => {
  return (
    <React.Fragment>
      <SideBar admin />
      <div className="user_indivisual_section">
        <BackUserBtn
          btnName="Back to Users"
          btnImg={back_icon}
          btnLink="/user-list"
        />

        <div className="userprofile_form">
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
      </div>
    </React.Fragment>
  );
};

export default UserIndivisual;
