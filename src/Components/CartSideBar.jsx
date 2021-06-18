import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { minusQty, addQty,deleteCartItem } from "../GlobalState/CreateSlice";
// assets
import cart from "../Assets/chair 1.svg";
import cart2 from "../Assets/cart.svg";
import arrow from "../Assets/Vector (1).svg";
import add from "../Assets/Group 16559.svg";
import minus from "../Assets/Group 16560.svg";
import dlt from "../Assets/dlt.svg";

export default function CartSideBar() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.cardReducer.cart;
  });
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="cart_sidebar_container" role="presentation">
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
            {selector && selector.map((res, id) => (
              <React.Fragment key={id}>
                  <tr key={res.id}>
                    <td className="pro_info_td">
                      <img
                        className="cart_pro_img"
                        src={res.cardImg}
                        alt="..."
                      />{" "}
                      <span>{res.title}</span>
                    </td>
                    <td>${res.price}</td>
                    <td className="counter_td">
                      <div>
                        <img
                          onClick={() => dispatch(minusQty(res.id))}
                          src={minus}
                          alt="..."
                        />
                        <span>{res.qty}</span>
                        <img
                          onClick={() => dispatch(addQty(res.id))}
                          src={add}
                          alt="..."
                        />
                      </div>
                    </td>
                    <td>
                      <img onClick={() => dispatch(deleteCartItem(res.id))} src={dlt} alt="" />
                    </td>
                  </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="cart_nav_logo">
            <img
              className="nav_cartLogo"
              onClick={toggleDrawer(anchor, true)}
              src={cart}
              alt="..."
            />
            {selector && selector.length ? (
              <span className="no_cart_items">{selector.length}</span>
            ) : null}
          </div>
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
