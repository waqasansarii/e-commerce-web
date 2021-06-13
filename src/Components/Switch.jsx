import React from "react";
import Switch from "react-switch";

const SwitchToggle = ({handleShow,toggle,off,on}) => {
  
  return (
    <div>
      <label>
        <Switch
          height={25}
          width={60}
          onChange={handleShow}
          uncheckedIcon={
            <div
              style={{
                color: "#9B9B9B",
                padding: 5,
                paddingRight: 5,
                paddingLeft: 8,
                fontSize: 12,
              }}
            >
              {off}
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
              {on}
            </div>
          }
          checked={toggle}
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
