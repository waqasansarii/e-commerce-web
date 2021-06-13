import React, { useState } from "react";
import SwitchToggle from "../Switch";
import { dataAtoZ, highToLow } from "../../GlobalState/CreateSlice";
import { useDispatch } from "react-redux";
// assets
import filter from "../../Assets/Vector (2).svg";
// import more from "../../Assets/sort-down.svg";

const ResultHead = () => {
  const dispatch = useDispatch();
  let [comp, setComp] = useState(false);
  const handleCompare = (e) => {
    setComp(e);
  };
  const handleChange = (e) => {
    //  console.log(e.target.value)
    dispatch(dataAtoZ(e.target.value));
  };

  const handleHighToLow = (e) => {
    dispatch(highToLow(e.target.value));
  };

  return (
    <div className="result_head_container">
      <div className="result_head_main_div">
        <div className="result_head_div">
          <div className="result_filter_div">
            <p>Results (3102)</p>
            <div className="a_z_filter">
              <img src={filter} alt="" />
              <select onChange={handleChange} name="a-z" id="a-z">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className="low_to_high_filter">
              <img src={filter} alt="" />
              {/* <span>Price:</span> */}
              <select onChange={handleHighToLow} name="price" id="price">
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
              </select>
            </div>
          </div>
          <div className="compare_switch_div">
            <p>Compare</p>
            <div>
              <SwitchToggle
                handleShow={handleCompare}
                toggle={comp}
                off="OFF"
                on="ON"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultHead;
