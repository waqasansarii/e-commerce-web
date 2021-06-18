import React from "react";
import "../Style/Modal.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import ReportBtn from "../Button/ReportBtn";
// assets
import share_icon from "../../Assets/share 1.png";
import pdfIcon from "../../Assets/pdf 1.png";
import excelIcon from "../../Assets/excel 1.png";
import googleSheetIcon from "../../Assets/google-sheets 1.png";
import iIcon from "../../Assets/iicon.png";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: "10px 18px 0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between !important",
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
    justifyContent: "flex-start !important",
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
        className="export_button"
        onClick={handleClickOpen}
        endIcon={<img src={share_icon} alt="..." />}
      >
        Export
      </Button>
      <Dialog
        // onBackdropClick="false"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="export_modal"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Where do you want to export?
        </DialogTitle>
        <DialogContent className="report_modal_content">
          <Box display="flex" alignItems="center">
            <img src={iIcon} alt="..." />
            <span>All Columns selected will export</span>
          </Box>
          <Box className="export_items">
            <Box>
              <img src={pdfIcon} alt="..." />
              <span>Adobe PDF</span>
            </Box>
            <Box>
              <img src={excelIcon} alt="..." />
              <span>Excel</span>
            </Box>
            <Box>
              <img src={googleSheetIcon} alt="..." />
              <span>Google Sheets</span>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
