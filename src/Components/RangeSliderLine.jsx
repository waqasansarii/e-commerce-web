import React from "react";

const RangeSliderLine = ({ value, min, max }) => {
  //   console.log(value);
  let minVal = value[0];
  let maxVal = value[1];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const calcI = (val) => {
    const a = val - min,
    b = max - min;
    
    const value = ((a / b)) ;
    return Math.round(value * arr.length)
  };
  const minI = calcI(minVal);
  const maxI = calcI(maxVal);
  return (
    <div>
      <div className="range_lines_div">
        {arr.map(el=>{
          return <p key={el}
          className={`r_${el}`}
          style={{ background: minI < el && maxI >= el ? "#0075ff" : "" }}
        ></p>
        })}
      </div>
    </div>
  );
};

export default RangeSliderLine;
