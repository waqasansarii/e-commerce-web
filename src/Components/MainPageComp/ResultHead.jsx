import React from "react";
import SwitchToggle from "../Switch";
// assets
import filter from "../../Assets/Vector (2).svg";
import more from "../../Assets/sort-down.svg";

const ResultHead = () => {
  return (
    <div className="result_head_container">
      <div className="result_head_main_div">
        <div className="result_head_div">
          <div className="result_filter_div">
            <p>Results (3102)</p>
            <div className="a_z_filter">
              <img src={filter} alt="" />
              <p>A-Z</p>
              <img src={more} alt="" />
            </div>
            <div className="a_z_filter">
              <img src={filter} alt="" />
              <p>A-Z</p>
              <img src={more} alt="" />
            </div>
          </div>
          <div className="compare_switch_div">
            <p>Compare</p>
            <div>
              <SwitchToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultHead;
