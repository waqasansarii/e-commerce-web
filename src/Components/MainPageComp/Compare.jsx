import React from "react";
import { useSelector } from "react-redux";
import compare from "../../Assets/compare (1) 1.svg";
import item from "../../Assets/image 21.svg";


const Compare = ({ img, price }) => {
  const selector = useSelector((state) => {
    return state.cardReducer.compare;
  });


  return (
    <div className="compare_container">
      <div className="compare_md">
        <div className="compare_sd">
          <div className="comapre_d">
            <div className="compare_head m_c_head">
              <div className="com_img">
                <img src={compare} alt="" />
                <h2>Compare</h2>
              </div>
              <div className="items_no">
                <p>{selector.length} Items</p>
              </div>
            </div>
            <div className="compare_bofd mob_none">
              <ul className="compare_ul">
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
                <li>Dummy Text</li>
              </ul>
            </div>
          </div>
          {selector.map((val, i) => (
            <div className="comapre_d" key={i}>
              <div className="compare_head">
                {img ? (
                  <div className="c_item_img">
                    <img src={val.cardImg} alt="" />
                  </div>
                ) : null}
                <div className="items_name">
                  <p>{val.name}</p>
                </div>
              </div>
              <div className="compare_bofd">
                <ul className="compare_ul">
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                  <li>{val.name}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
