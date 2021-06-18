import React from "react";
import Button from "@material-ui/core/Button";
import "../Style/Button.css";
// assets
import share_icon from "../../Assets/share 1.png";

export default function ExportBtn() {
  return (
    <div>
      <Button
        variant="contained"
        className="export_button"
        endIcon={<img src={share_icon} alt="..." />}
      >
        Export
      </Button>
    </div>
  );
}
