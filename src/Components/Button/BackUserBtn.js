import React from "react";
import Button from "@material-ui/core/Button";
import "../Style/Button.css";
// assets
import back_icon from "../../Assets/back_icon.png";

export default function BackUserBtn() {
  return (
    <div>
      <Button
        variant="contained"
        className="back_button"
        startIcon={<img src={back_icon} alt="..." />}
      >
        Back to Users
      </Button>
    </div>
  );
}
