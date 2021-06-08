import React, { useState } from "react";
import Switch from "react-switch";

const SwitchToggle = () => {
  let [bool, setBool] = useState(false);
  const handleChange = (e) => {
    setBool(e);
  };
  return (
    <div>
      <label>
        <Switch
          height={25}
          width={60}
          onChange={handleChange}
          uncheckedIcon={
            <div
              style={{
                color: "#9B9B9B",
                padding: 2,
                paddingRight: 2,
                paddingLeft: 5,
                fontSize: 12,
              }}
            >
              OFF
            </div>
          }
          checkedIcon={
            <div
              style={{
                color: "white",
                padding: 5,
                paddingRight: 5,
                paddingLeft: 8,
                fontSize: 12,
              }}
            >
              ON
            </div>
          }
          checked={bool}
          //   checkedHandleIcon={}
          onColor="#0075FF"
          offColor="#F5F5F5"
          //   onColor="#0ff"
          offHandleColor="#ffffff"
          onHandleColor="#ffffff"
        />
      </label>
    </div>
  );
};

export default SwitchToggle;
