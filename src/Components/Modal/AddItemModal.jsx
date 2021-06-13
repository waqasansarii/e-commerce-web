import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Box } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import SwitchToggle from "../Switch";
// assets
import IconButton from "@material-ui/core/IconButton";
import add from "../../Assets/Vector.svg";
import AddIcon from "../../Assets/add-icon.png";
import closeBtnIcon from "../../Assets/close-btn-icon.png";
import item1 from "../../Assets/item1.png";
import item1s from "../../Assets/item1s.png";
import iicon from "../../Assets/iicon.png";
import dollarIcon from "../../Assets/dollar-circle.png";
import fileIcon from "../../Assets/file-icon.png";
import modelIcon from "../../Assets/3dmodel-icon.png";

const styles = (theme) => ({
  root: {
    margin: 0,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className="asd" {...other}>
      {onClose ? (
        <IconButton aria-label="close" className="close_btn" onClick={onClose}>
          <img src={closeBtnIcon} alt="..."/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [bool, setBool] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <button onClick={handleClickOpen}>
        <img src={add} alt="..." />
      </button>
      <Dialog
      PaperProps={{className:"additem_modal"}}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        style={{ borderRadius: "18px !important" }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>

        <DialogContent className="additem_model_content">
          <Box>
            <Box className="amc_1">
              <Box className="amc1_content">
                <img src={item1} alt="..." />
                <Box className="amc1_sub_items"> 
                  <input
                    type="radio"
                    style={{ display: "none" }}
                    id="item1"
                    name="box"
                  />
                  <label htmlFor="item1" className="item_select">
                    <img className="item_s" src={item1s} alt="..." />
                  </label>
                  <input
                    type="radio"
                    style={{ display: "none" }}
                    id="item2"
                    name="box"
                  />
                  <label htmlFor="item2" className="item_select">
                    <img className="item_s" src={item1s} alt="..." />
                  </label>
                  <input
                    type="radio"
                    style={{ display: "none" }}
                    id="item3"
                    name="box"
                  />
                  <label htmlFor="item3" className="item_select">
                    <img className="item_s" src={item1s} alt="..." />
                  </label>
                </Box>
              </Box>
            </Box>
            <Box className="amc_2">
              <Box className="amc2_content">
                <h2>Grove</h2>
                <Box
                  className="amc2_text1"
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                >
                  <img src={iicon} alt="..." />
                  <span>Product Information</span>
                </Box>
                <Box mt="0.5rem">
                  <span>Product Type</span>
                  <strong>Tables</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box mt="0.5rem">
                  <span>Application</span>
                  <strong>Occassional Tables</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box mt="0.5rem">
                  <span>Size</span>
                  <strong>12 W x NA Lx17 H X NA D</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box mt="0.5rem">
                  <span>Model</span>
                  <strong>GRO1217AS3744</strong>
                </Box>
              </Box>
            </Box>
            <Box className="amc_3">
              <Box className="amc3_content">
                <Box>
                  <img src={dollarIcon} alt="..." />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Discount</span>
                  <strong>60%</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>List Price</span>
                  <strong>$474</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Net Price</span>
                  <strong>$189.60</strong>
                </Box>
                <Box
                  mt="2.6rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Files</span>
                  <Box
                    className="amc3_text"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <span>Download</span>
                    <img src={fileIcon} alt="..." />
                  </Box>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Renders</span>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className="amc3_text"
                  >
                    <span>Download</span>
                    <img src={modelIcon} alt="..." />
                  </Box>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Contracts</span>
                  <SwitchToggle handleShow={(e)=>setBool(e)} toggle={bool} off='false' on='true' />
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions className="additem_bottom">
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            className="addproduct_button"
            endIcon={<img src={AddIcon} alt="..."/>}
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
