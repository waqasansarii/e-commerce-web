import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
// assets
import cart from "../Assets/chair 1.svg";
import cart2 from "../Assets/cart.svg";
import arrow from "../Assets/Vector (1).svg";
import cardImg from "../Assets/image 21.svg";
import add from "../Assets/Group 16559.svg";
import minus from "../Assets/Group 16560.svg";
import dlt from "../Assets/dlt.svg";


export default function CartSideBar() {
  const [state, setState] = React.useState({
    right: false,
  });
  let [count,setCount] = useState(1)

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="cart_sidebar_container"
      role="presentation"
    >
      <div className="cart_head">
        <div className="cart_head_img">
          <img src={cart2} alt="" />
          <p>Quote List</p>
        </div>
        <p className="cart_cros" onClick={toggleDrawer(anchor, false)}>
          &times;
        </p>
      </div>
      <div className="cart_table_div">
        <table className="cart_table">
          <thead>
            <tr>
              <th>Product</th>
              <th>
                <img src={arrow} alt="" /> <span>Net</span>
              </th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pro_info_td">
                <img className="cart_pro_img" src={cardImg} alt="..." />{" "}
                <span>Grove</span>
              </td>
              <td>$3423</td>
              <td className="counter_td">
                <div>
                  <img onClick={()=>setCount(count ===0 ?count: --count)} src={minus} alt="..." />
                  <span>{count}</span>
                  <img onClick={()=>setCount(++count)} src={add} alt="..." />
                </div>
              </td>
              <td>
                <img src={dlt} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img
            className="nav_cartLogo"
            onClick={toggleDrawer(anchor, true)}
            src={cart}
            alt="..."
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
