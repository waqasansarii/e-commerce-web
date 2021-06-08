import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import {  NavLink } from "react-router-dom";
import './Style/SideBar.css'
// assets
import home from "../Assets/Dashboard icon.svg";
import qu from "../Assets/Group 16555.svg";
import faq from "../Assets/Group 16556.svg";
import setting from "../Assets/settings icon.svg";
import logo from '../Assets/CC_Logo_final 2.svg'

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
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
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <img className='web_logo' src={logo} alt="" />
        <List >
          <div className='home_links'>
            <NavLink activeClassName='activeLink' className='sidebar_link' to='/'>
              <img src={home} alt="..." />
              <p>Home</p>
            </NavLink>
          </div>
          <div >
            <NavLink activeClassName='activeLink' className='sidebar_link' to='/qu'>
              <img src={qu} alt="..." />
              <p>Quote</p>
            </NavLink>
          </div>
        </List>
        <List className='faq_links'>
        <div >
            <NavLink activeClassName='activeLink' className='sidebar_link' to='/faq'>
              <img src={faq} alt="..." />
              <p>FAQ</p>
            </NavLink>
          </div>
          <div >
            <NavLink activeClassName='activeLink' className='sidebar_link' to='/setting'>
              <img src={setting} alt="..." />
              <p>Setting</p>
            </NavLink>
          </div>
        
        </List>
      </Drawer>
    </div>
  );
}
