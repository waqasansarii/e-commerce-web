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
              <select name="a-z" id="a-z">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
              {/* <p>A-Z</p>
              <img src={more} alt="" /> */}
            </div>
            <div className="low_to_high_filter">
              <img src={filter} alt="" />
              <span>Price:</span>
              <select name="price" id="price">
                <option value="Low to High">Low to High</option>
                <option value="Low to High">High to Low</option>
              </select>
              {/* <p>A-Z</p>
              <img src={more} alt="" /> */}
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
