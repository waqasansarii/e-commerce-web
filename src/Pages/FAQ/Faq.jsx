import React from "react";
import ReportModal from "../../Components/Modal/ReportModal";
import SideBar from "../../Components/SideBar";
import FaqList from "../../Components/FaqComp/FaqList";
import "./Faq.css";

const Faq = () => {
  return (
    <React.Fragment>
      <SideBar />
      <div className="faq_section">
        <div className="faq_header">
          <div className="fq_c"></div>
          <h2>F.A.Q.</h2>
          <ReportModal />
        </div>
        <div className="faq_content">
          <FaqList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
