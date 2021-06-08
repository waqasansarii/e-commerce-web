import React from "react";

const RangeSliderLine = ({ value }) => {
//   console.log(value);
  let min = value[0];
  let max = value[1];
  let add = 100 / 13;

//   console.log(add * 12 , max);
  return (
    <div>
      <div className="range_lines_div">
        <p
          className="r_1"
          style={{ background: min < add && max >= add ? "#0075ff" : "" }}
        ></p>
        <p
          className="r_2"
          style={{
            background: min < add * 2 && max >= add + add ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_3"
          style={{
            background: min < add * 3 && max >= add * 3 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_4"
          style={{
            background: min < add * 4 && max >= add * 4 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_5"
          style={{
            background: min < add * 5 && max >= add * 5 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_6"
          style={{
            background: min < add * 6 && max >= add * 6 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_7"
          style={{
            background: min < add * 7 && max >= add * 7 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_8"
          style={{
            background: min < add * 8 && max >= add * 8 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_9"
          style={{
            background: min < add * 9 && max >= add * 9 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_10"
          style={{
            background: min < add * 10 && max >= add * 10 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_11"
          style={{
            background: min < add * 11 && max >= add * 11 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_12"
          style={{
            background: min <= add * 12 && max >= add * 12 ? "#0075ff" : "",
          }}
        ></p>
        <p
          className="r_13"
          style={{
            background: min <= add * 13 && max >= add * 12.3 ? "#0075ff" : "",
          }}
        ></p>
      </div>
    </div>
  );
};

export default RangeSliderLine;
