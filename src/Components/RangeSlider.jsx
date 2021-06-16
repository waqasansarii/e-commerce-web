import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import RangeSliderLine from "./RangeSliderLine";
import { Box } from "@material-ui/core";

const AirbnbSlider = withStyles({
  root: {
    color: "#0075ff",
    height: 5,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -9,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 10,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 10,
    borderRadius: 10,
  },
})(Slider);

export default function CustomizedSlider({ handleChange, value, min, max }) {
  return (
    <div>
      <RangeSliderLine min={min} max={max} value={value} />
      <AirbnbSlider value={value} onChange={handleChange} min={min} max={max} />
      <Box
        className="range_bottom_text"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <span style={{ color: "#9B9B9B" }}>{`$${value[0]}`}</span>
        <span
          style={{ color: "#0075FF", fontWeight: 600 }}
        >{`$${value[1]}`}</span>
      </Box>
    </div>
  );
}
