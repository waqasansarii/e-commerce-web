import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { NavLink, useHistory } from "react-router-dom";
import clsx from "clsx";
import "./Style/SideBar.css";
// assets
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import home from "../Assets/Dashboard icon.svg";
import dashboardIcon from "../Assets/dashboard-icon.png";
import settingIcon from "../Assets/settings-icon.png";
import faqWhite from "../Assets/question-icon.png";
import qu from "../Assets/Group 16555.svg";
import quw from "../Assets/quote-icon.png";
import adminUser from "../Assets/admi-user-icon.png";
import adminUserW from "../Assets/admi-user-iconw.png";
import adminTicket from "../Assets/admin-ticket-icon.png";
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

export default function SideBar({ admin }) {
  const classes = useStyles();
  const history = useHistory();
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

  // mobile view sidebar

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
        <img
          src={logo}
          onClick={() => {
            history.push("/");
          }}
          alt="..."
        />
        <p>&times;</p>
      </div>
      <List style={{ paddingBottom: "0px" }}>
        <div className="home_links">
          <NavLink
            exact
            activeClassName="activeLink"
            className="sidebar_mob_link"
            to={admin ? "/admin" : "/"}
          >
            <img className="img1" src={home} alt="..." />
            <img className="img2" src={dashboardIcon} alt="..." />
            <p>Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            activeClassName="activeLink"
            className="sidebar_mob_link"
            to={admin ? "/user-list" : "/qu"}
          >
            <img className="img1" src={admin ? adminUserW : quw} alt="..." />
            <img className="img2" src={admin ? adminUser : qu} alt="..." />{" "}
            <p>{admin ? "Users" : "Quote"}</p>
          </NavLink>
        </div>
      </List>
    
      {!admin ? (
        <>  <div>
        <NavLink
          exact
          activeClassName="activeLink"
          className="sidebar_mob_link"
          to="/faq"
        >
          <img className="img1" src={faqWhite} alt="..." />
          <img className="img2" src={faq} alt="..." />
          <p>FAQ</p>
        </NavLink>
      </div>
          <div>
            <NavLink
              exact
              activeClassName="activeLink"
              className="sidebar_mob_link"
              to="/user-profile"
            >
              <img className="img1" src={settingIcon} alt="..." />
              <img className="img2" src={setting} alt="..." />
              <p>Setting</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              activeClassName="activeLink"
              className="sidebar_mob_link"
              to="/signup"
            >
              <AccountCircleIcon className="img1" />
              <AccountCircleIcon className="img2" />
              <p>Sign up</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              activeClassName="activeLink"
              className="sidebar_mob_link"
              to="/login"
            >
              <AccountCircleIcon className="img1" />
              <AccountCircleIcon className="img2" />
              <p>Login</p>
            </NavLink>
          </div>
        </>
      ) : null}
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
            {!admin ? (
              <div>
                <CartSideBar />
              </div>
            ) : null}
            <img src={profile} alt="..." />
          </div>
        </AppBar>
        {/* desktop view  */}
        <div className="desktop_drw">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <img
              className="web_logo"
              onClick={() => {
                history.push("/");
              }}
              src={logo}
              alt="..."
            />

            <List>
              <div className="home_links">
                <NavLink
                  exact
                  activeClassName="activeLink"
                  className="sidebar_link"
                  to={admin ? "/admin" : "/"}
                >
                  <img className="img1" src={home} alt="..." />
                  <img className="img2" src={dashboardIcon} alt="..." />
                  <p>Home</p>
                </NavLink>
              </div>
              <div>
                <NavLink
                  exact
                  activeClassName="activeLink"
                  className="sidebar_link"
                  to={admin ? "/user-list" : "/qu"}
                >
                  <img
                    className="img1"
                    src={admin ? adminUserW : quw}
                    alt="..."
                  />
                  <img
                    className="img2"
                    src={admin ? adminUser : qu}
                    alt="..."
                  />
                  <p>{admin ? "Users" : "Quote"} </p>
                </NavLink>
              </div>
              {admin ? (
                <div>
                </div>
              ) : null}
            </List>
            {!admin ? (
              <List className="faq_links">
                <div>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="sidebar_link"
                    to="/faq"
                  >
                    <img className="img1" src={faqWhite} alt="..." />
                    <img className="img2" src={faq} alt="..." />
                    <p>FAQ</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="sidebar_link"
                    to="/user-profile"
                  >
                    <img className="img1" src={settingIcon} alt="..." />
                    <img className="img2" src={setting} alt="..." />
                    <p>Setting</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="sidebar_link"
                    to="/signup"
                  >
                    <AccountCircleIcon className="img1" />
                    <AccountCircleIcon className="img2" />
                    <p>Sign up</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="sidebar_link"
                    to="/login"
                  >
                    <AccountCircleIcon className="img1" />
                    <AccountCircleIcon className="img2" />
                    <p>Login</p>
                  </NavLink>
                </div>
              </List>
            ) : null}
          </Drawer>
        </div>
      </div>
    </React.Fragment>
  );
}
