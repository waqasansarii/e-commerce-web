import React from "react";
import "./UserList.css";
import SideBar from "../../Components/SideBar";
import UserListTable from "../../Components/Table/UserListTable";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import BackUserBtn from "../../Components/Button/BackUserBtn";
// assets
import addIcon from "../../Assets/add_icon.png";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
    borderRadius: "8px !important",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    color: "#3A485A !important",
    width: "300px",
    "&::placeholder": {
      color: "#3A485A !important",
      opacity: "1",
    },
  },

  //   inputInput: {
  //     input: {
  //       "&::placeholder": {
  //         color: "red !important",
  //       },
  //     },
  //   },
}));
const UserList = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SideBar admin/>
      <div className="userlist_section">
        <div className="ul_header">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Contact or Company"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <BackUserBtn btnName="Add New User" btnImg={addIcon} btnLink="#" />
        </div>
        <div className="ul_table">
          <UserListTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
