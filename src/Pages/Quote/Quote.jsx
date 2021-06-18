import { Box } from "@material-ui/core";
import React from "react";
import SideBar from "../../Components/SideBar";
import DataTable from "../../Components/Table/QuoteTable";
import ExportBtn from "../../Components/Button/ExportBtn";
import "./Quote.css";
import CustomizedDialogs from "../../Components/Modal/ExportModal";
const Quote = () => {
  return (
    <React.Fragment>
      <SideBar />
      <Box className="quote_section">
        <Box className="qu_box">
          <Box className="qu_b1">
            <Box>
              <span>Total List Price</span>
              <strong>$55,526.03</strong>
            </Box>
            <Box>
              <span>Average Discount</span>
              <strong>7%</strong>
            </Box>
            <Box>
              <span>Average Margin %</span>
              <strong>7%</strong>
            </Box>
            <Box>
              <span>Total Dealer Net</span>
              <strong>$15,526.03</strong>
            </Box>
            <Box>
              <span>Total Dealer Sell</span>
              <strong>$35,526.03</strong>
            </Box>
          </Box>
          <CustomizedDialogs />
        </Box>
        <Box className="qu_table">
          <DataTable />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Quote;
