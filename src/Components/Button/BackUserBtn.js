import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../Style/Button.css";
// assets

export default function BackUserBtn(props) {
  return (
    <div>
      <Link to={props.btnLink}>
        <Button
          variant="contained"
          className="back_button"
          startIcon={<img src={props.btnImg} alt="..." />}
        >
          {props.btnName}
        </Button>
      </Link>
    </div>
  );
}
