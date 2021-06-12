import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import RangeSliderLine from "./RangeSliderLine";
import {priceRange} from '../GlobalState/CreateSlice'
import {useDispatch} from 'react-redux'


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


export default function CustomizedSlider() {
  const dispatch = useDispatch()
  const min = 300,
  max = 15000
  const [value, setValue] = React.useState([min, max]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(priceRange(newValue))
    console.log(newValue)
  };

  return (
    <div>
      <RangeSliderLine min={min}
        max={max} value={value} />
      <AirbnbSlider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </div>
  );
}
