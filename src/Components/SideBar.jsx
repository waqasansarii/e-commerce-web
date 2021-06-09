import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import "./Style/SideBar.css";
// assets
import home from "../Assets/Dashboard icon.svg";
import qu from "../Assets/Group 16555.svg";
import faq from "../Assets/Group 16556.svg";
import setting from "../Assets/settings icon.svg";
import logo from "../Assets/CC_Logo_final 2.svg";
import bar from "../Assets/Nav.svg";
import profile from "../Assets/Profile.svg";
import CartSideBar from "./CartSideBar";

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: "white",
    display: "flex",
    flexDirection: "inherit",
    justifyContent: "space-between",
    // alignItems:'center'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  list: {
    width: 180,
    paddingLeft: 20,
    paddingRight: 20,
  },
  fullList: {
    width: "auto",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="mob_top_logo">
        <img src={logo} alt="..." />
        <p>&times;</p>
      </div>
      <List>
        <div className="home_links">
          <NavLink
            activeClassName="activeLink"
            className="sidebar_mob_link"
            to="/"
          >
            <img src={home} alt="..." />
            <p>Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="activeLink"
            className="sidebar_mob_link"
            to="/qu"
          >
            <img src={qu} alt="..." />
            <p>Quote</p>
          </NavLink>
        </div>
      </List>
      <div>
        <NavLink
          activeClassName="activeLink"
          className="sidebar_mob_link"
          to="/faq"
        >
          <img src={faq} alt="..." />
          <p>FAQ</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          activeClassName="activeLink"
          className="sidebar_mob_link"
          to="/setting"
        >
          <img src={setting} alt="..." />
          <p>Setting</p>
        </NavLink>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <img onClick={toggleDrawer(anchor, true)} src={bar} alt="" />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Toolbar>
          <div className="cart_img_div">
            <div>
              <CartSideBar />
            </div>
            <img src={profile} alt="..." />
          </div>
        </AppBar>
        <div className="desktop_drw">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <img className="web_logo" src={logo} alt="" />
            <List>
              <div className="home_links">
                <NavLink
                  activeClassName="activeLink"
                  className="sidebar_link"
                  to="/"
                >
                  <img src={home} alt="..." />
                  <p>Home</p>
                </NavLink>
              </div>
              <div>
                <NavLink
                  activeClassName="activeLink"
                  className="sidebar_link"
                  to="/qu"
                >
                  <img src={qu} alt="..." />
                  <p>Quote</p>
                </NavLink>
              </div>
            </List>
            <List className="faq_links">
              <div>
                <NavLink
                  activeClassName="activeLink"
                  className="sidebar_link"
                  to="/faq"
                >
                  <img src={faq} alt="..." />
                  <p>FAQ</p>
                </NavLink>
              </div>
              <div>
                <NavLink
                  activeClassName="activeLink"
                  className="sidebar_link"
                  to="/setting"
                >
                  <img src={setting} alt="..." />
                  <p>Setting</p>
                </NavLink>
              </div>
            </List>
          </Drawer>
        </div>
      </div>
    </React.Fragment>
  );
}
