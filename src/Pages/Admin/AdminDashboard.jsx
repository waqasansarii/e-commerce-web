import React from "react";
import Chart from "../../Components/AdminPanel/Chart";
import "./Admin.css";
// assets
import user from "../../Assets/Group 16403.svg";
import SideBar from "../../Components/SideBar";

const AdminDashboard = () => {
  return (
    <div className="admin_container">
      <SideBar admin/>
      <div className="admin_md">
        <div className="admin_sd">
          <div className="admin_user_no">
            <img src={user} alt="..." />
            <p>Number of users</p>
            <h1>43423</h1>
          </div>
          <div className='chart_container'>
            <div className="chart_div_con">
              <div className="chart_body">
                <h3>350</h3>
                <p className="s_rqst">Support Requests</p>
                <p className="t_s_rqst">
                  Total number of support requests that come in
                </p>
              </div>
              <Chart />
            </div>
              <div className="chart_botm_d">
                <div className="chart_boxes">
                  <h3>10</h3>
                  <p>Open</p>
                </div>
                <div className="chart_boxes">
                  <h3>5</h3>
                  <p>Running</p>
                </div>
                <div className="chart_boxes">
                  <h3>3</h3>
                  <p>Solved</p>
                </div>
              </div>
          </div>
          {/* support ticket  */}
          <div className="support_ticket">
            <h4>Top Support Ticket Reasons</h4>
            <ul className="tickets">
              <li>1. Bug on XYZ Page</li>
              <li>2. Tachnical Problem</li>
              <li>3. Slow Processing</li>
            </ul>
          </div>
          <div className="support_ticket">
            <h4>Users Plans Overview</h4>
            <ul className="tickets">
              <li>
                <p> Month to Month</p>
                <p>10</p>
              </li>
              <li>
                <p>Annual</p>
                <p>10</p>
              </li>
              <li>
                <p>7 Days Free Trail</p>
                <p>20</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
