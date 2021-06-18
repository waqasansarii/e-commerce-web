import React from "react";
import "../Style/DropDown.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import settingIcon from "../../Assets/settings icon1.png";
import { ListItem } from "@material-ui/core";
import { Box } from "@material-ui/core";
// assets

import upDownIcon from "../../Assets/up down.png";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function SettingDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [show, setShow] = React.useState({
    f: false,
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
    f11: false,
    f12: false,
    f13: false,
    f14: false,
    f15: false,
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpen = (e) => {
    setShow({ ...show, [e]: !show[e] });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        className="setting_icon_b"
        onClick={handleClick}
      >
        <img src={settingIcon} alt="..." />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        className="setting_menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Image</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f")}
            >
              Show
            </Button>
            <Button
              className={
                show.f === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Quantity</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f1 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f1")}
            >
              Show
            </Button>
            <Button
              className={
                show.f1 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f1")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Name</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f2 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f2")}
            >
              Show
            </Button>
            <Button
              className={
                show.f2 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f2")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Number</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f3 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f3")}
            >
              Show
            </Button>
            <Button
              className={
                show.f3 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f3")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Description</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f4 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f4")}
            >
              Show
            </Button>
            <Button
              className={
                show.f4 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f4")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Manufacture</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f5 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f5")}
            >
              Show
            </Button>
            <Button
              className={
                show.f5 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f5")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Size</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f6 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f6")}
            >
              Show
            </Button>
            <Button
              className={
                show.f6 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f6")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Category</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f7 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f7")}
            >
              Show
            </Button>
            <Button
              className={
                show.f7 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f7")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Application</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f8 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f8")}
            >
              Show
            </Button>
            <Button
              className={
                show.f8 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f8")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>List Price</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f9 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f9")}
            >
              Show
            </Button>
            <Button
              className={
                show.f9 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f9")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Discount</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f10 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f10")}
            >
              Show
            </Button>
            <Button
              className={
                show.f10 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f10")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Dealer Net</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f11 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f11")}
            >
              Show
            </Button>
            <Button
              className={
                show.f11 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f11")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Margin %</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f12 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f12")}
            >
              Show
            </Button>
            <Button
              className={
                show.f12 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f12")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Dealer Sell</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={
                show.f13 === false ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f13")}
            >
              Show
            </Button>
            <Button
              className={
                show.f13 === true ? "drp_active_btn1" : "drp_active_btn2"
              }
              onClick={() => handleOpen("f13")}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
