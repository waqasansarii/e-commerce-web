import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "../Style/Modal.css";
import ReportBtn from "../Button/ReportBtn";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: "10px 18px 0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between !important",
    color: "#302C2C",
  },
  closeButton: {
    color: "#302C2C",
    padding: "0",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
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
    padding: "0px 18px 18px 18px !important",
    justifyContent:"flex-start !important",
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="report_button"
        onClick={handleClickOpen}
      >
        Report an issue
      </Button>{" "}
      <Dialog
      onBackdropClick="false"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="report_modal"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Report An Issue
        </DialogTitle>
        <DialogContent className="report_modal_content">
          <form action="#" className="report_form">
            <div>
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" cols="50"></textarea>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <ReportBtn btnName="Submit" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
