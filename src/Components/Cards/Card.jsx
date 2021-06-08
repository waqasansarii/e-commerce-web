import React from "react";
import "./Card.css";
// assets
// import cardImg from "../../Assets/image 21.svg";
// import newArrive from "../../Assets/Group 16578.svg";
import add from "../../Assets/Vector.svg";
import arrow from "../../Assets/Vector (1).svg";
import compare from "../../Assets/compare (1) 1.svg";
import detail from "../../Assets/Frame 16640.svg";

const Card = ({ data }) => {
  return (
    <div className="card_container">
      {data.map((val) => (
        <div className="card_div" key={val.id}>
          <div className="card_top_div">
            <img src={ val.newArrival} alt="" />
            <div className="add_card_div">
              <p>ADD</p>
              <img src={add} alt="" />
            </div>
          </div>
          <img className="main_card_img" src={val.cardImg} alt="" />
          <div className="card_body_div">
            <h3>{val.title}</h3>
            <p className="card_name">{val.name}</p>
            <p className="body_text">{val.desc}</p>
            <div className="card_net_div">
              <div className="net_img">
                <img src={arrow} alt="..." />
                <p>Net</p>
              </div>
              <p className="price_div">{val.price}</p>
            </div>
            <div className="compared_main_div">
              <div className="card_compare_div">
                <div className="compare_img">
                  <img src={compare} alt="..." />
                  <p>COMPARE</p>
                </div>
                <input type="checkbox" name="compare" id="compare" />
              </div>
              <div className="detail_div">
                <img src={detail} alt="..." />
                <p>View Details</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
