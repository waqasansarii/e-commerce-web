import React from 'react'
import Card from '../../Components/Cards/Card'
import Filters from '../../Components/MainPageComp/Filters'
import ResultHead from '../../Components/MainPageComp/ResultHead'
import SideBar from '../../Components/SideBar'
import {carddata} from './cardData'
import './Style.css'


const MainProduct = () => {
    return (
        <div>
          <SideBar />
          <div className="main_page_container">
              <div className="filter_comp">
                  <Filters />
              </div>
              <div className="filter_head_card_comp">
                  <ResultHead />
                  <Card data={carddata} />
              </div>
          </div>
        </div>
    )
}

export default MainProduct
