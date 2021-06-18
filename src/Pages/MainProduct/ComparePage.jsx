import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import Filters from "../../Components/MainPageComp/Filters";
import ResultHead from "../../Components/MainPageComp/ResultHead";
import SideBar from "../../Components/SideBar";
// assets
import "./Style.css";
import Compare from "../../Components/MainPageComp/Compare";

const ComparePage = () => {
    const history = useHistory()


  // viewing option filter function
  // view price
  let [price, setPrice] = useState(true);
  const handleShowPrice = (e) => {
    setPrice(e);
  };
  // view price
  let [cardImgT, seCardImgT] = useState(true);
  const handleShowImg = (e) => {
    seCardImgT(e);
  };

  // compare off 
  let [comp, setComp] = useState(true);
  const handleCompare = (e) => {
    if(comp){
      setComp(e);
      history.push('/')
    }
  };

  // price range set 
  
  const min = 300,
  max = 1000
  const [range, setRange] = React.useState([min, max]);
  const handleRange = (event, newValue) => {
    setRange(newValue);
  };


  return (
    <div>
      <div id="top">
        <SideBar />
      </div>
      <div className="main_page_container">
        <div className="filter_comp">
          <Filters
            handleShowPrice={handleShowPrice}
            handleImg={handleShowImg}
            cardImgT={cardImgT}
            price={price}
            handleRange={handleRange}
            range={range}
            min={min}
            max={max}
          />
        </div>
        <div className="filter_head_card_comp">
          <ResultHead handleCompare={handleCompare} compare={comp} />
          <Compare price={price} img={cardImgT} />
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
