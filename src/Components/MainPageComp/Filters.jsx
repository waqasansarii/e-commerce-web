import React, { useState } from "react";
import FilterList from './FilterList'
import "./Style.css";
// assets
import search from "../../Assets/Icon.svg";
import i from "../../Assets/i.svg";
import add from "../../Assets/Group 16648.svg";
import minus from "../../Assets/Group 16649.svg";
import dollar from "../../Assets/Group.svg";
import imgs from "../../Assets/Group (1).svg";
import SwitchToggle from "../Switch";
import CustomizedSlider from "../RangeSlider";

let margin = ['5','10','15','20','25','30','35','40']

const Filters = ({partfunc,handleShowPrice,price,handleImg,cardImgT}) => {
  let [count, setCount] = useState(5);

  const handleAdd = () => {
    if (count < 40) {
      setCount(++count );
    }
  };
  const handleMinus = () => {
    if (count > 5) {
      setCount(--count);
    }
  };
  return (
    <div className="filters_container">
      <div className="filter_main_div">
        <div className="filter_div">
          <div className="search_inp_div">
            <img src={search} alt="" />
            <input type="text" onChange={partfunc} placeholder="Search By Part Number " />
          </div>
          <div className="price_range">
              <h3>Price Range</h3>
              <CustomizedSlider />
          </div>
          <div className="margins_div">
            <div className="margin_head">
              <h3>Margins</h3>
              <img src={i} alt="" />
            </div>
            <div className="margin_box">
                {margin.map((val)=>(
                    <p key={val}>{val}%</p>
                ))}

            </div>
            <div className="margin_counter">
              <img onClick={handleMinus} src={minus} alt="..." />
              <p>{count}%</p>
              <img onClick={handleAdd} src={add} alt="..." />
            </div>
          </div>
        </div>
        <div className="viewing_option_div">
            <h3>Viewing Options</h3>
            <div className="price_switch">
                <div className="img_price">
                   <img src={dollar} alt="" />
                   <p>Price</p>
                </div>
                <SwitchToggle handleShow={handleShowPrice} toggle={price} />
            </div>
            <div className="price_switch">
                <div className="img_price">
                   <img src={imgs} alt="" />
                   <p>Image</p>
                </div>
                <SwitchToggle handleShow={handleImg} toggle={cardImgT} />
            </div>
        </div>
        <div className="filter_tags_div">
            <div className="filter_tag">
                <p>Tables</p>
                <p className='cros_tag'>&times;</p>
            </div>
            <div className="filter_tag">
                <p>Accessories</p>
                <p className='cros_tag'>&times;</p>
            </div>
            <div className="filter_tag">
                <p>Jsi</p>
                <p className='cros_tag'>&times;</p>
            </div>
            <div className="filter_tag">
                <p>Lounge Seating</p>
                <p className='cros_tag'>&times;</p>
            </div>
            <div className="filter_tag">
                <p>Lounge Seating</p>
                <p className='cros_tag'>&times;</p>
            </div>
            <div className="filter_tag">
                <p>Lounge Seating</p>
                <p className='cros_tag'>&times;</p>
            </div>
            <div className="filter_tag">
                <p>Lounge Seating</p>
                <p className='cros_tag'>&times;</p>
            </div>
        </div>
        <FilterList />
      </div>
    </div>
  );
};

export default Filters;
