import React from "react";
import Button from "@material-ui/core/Button";
import "../Style/Button.css";

export default function ReportBtn(props) {
  return (
    <div>
      <Button variant="contained" className="report_button" >
        {props.btnName}
      </Button>
    </div>
  );
}
