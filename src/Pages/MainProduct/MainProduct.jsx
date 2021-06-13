import React, { useState } from "react";
import Card from "../../Components/Cards/Card";
import Filters from "../../Components/MainPageComp/Filters";
import ResultHead from "../../Components/MainPageComp/ResultHead";
import SideBar from "../../Components/SideBar";
import { carddata } from "./cardData";
// assets
import topArr from "../../Assets/arrow-right 3.svg";
import "./Style.css";

const MainProduct = () => {
  const [width] = React.useState(window.innerWidth);
  // top button show
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".top_arrow_div");
    if (width < 990) {
      header.classList.add("showTop", window.scrollY > 400);
    }
  });
  // end

  let [partNum, setPartNum] = useState("");

  const partFunc = (e) => {
    setPartNum(e.target.value);
    // console.log(e)
  };
  const inpFilterFunc = (event) => {
    return event.filter((val) => val.price.indexOf(partNum) > -1);
  };

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
            partfunc={partFunc}
          />
        </div>
        <div className="filter_head_card_comp">
          <ResultHead />
          <Card
            price={price}
            cardImgShow={cardImgT}
            data={inpFilterFunc(carddata)}
          />
        </div>
        <div className="top_arrow_div">
          <a href="#top">
            <img src={topArr} alt="" />
            <p>Top</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
