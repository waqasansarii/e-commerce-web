import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// assets
import filLogo from "../../Assets/fil-logo.png";
import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useState } from "react";
// import { visibleGridColumnsSelector } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0075FF",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    borderBottom: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#F9F9F9",
    },
  },
}))(TableRow);

function createData(name, plan, status) {
  return { name, plan, status };
}

const a = [
  createData(
    <Box
    className="ul_b1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Travel Agency</span>
      </Box>
    </Box>,
    "Monthly",
    "Active"
  ),
  createData(
    <Box
    className="ul_b1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Travel Agency</span>
      </Box>
    </Box>,
    "Monthly",
    "Active"
  ),
  createData(
    <Box
    className="ul_b1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Travel Agency</span>
      </Box>
    </Box>,
    "Monthly",
    "Active"
  ),
  createData(
    <Box
    className="ul_b1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Hello Agency</span>
      </Box>
    </Box>,
    "Yearly",
    "Offline"
  ),
];

const rows = [...a, ...a, ...a, ...a, ...a];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function UserListTable() {
  const classes = useStyles();
  const [val, setVal] = useState(0);
  const [rowsPerpage] = useState(3);
  const history = useHistory();
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ borderRadius: "6px 6px 0px 0px" }}>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Plan</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(val * rowsPerpage, val * rowsPerpage + rowsPerpage)
              .map((row) => (
                <StyledTableRow
                  key={row.name}
                  onClick={() => {
                    history.push("/user-indivisual");
                  }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.plan}</StyledTableCell>
                  <StyledTableCell>{row.status}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
            <Pagination page={val+1} count={Math.ceil(rows.length/rowsPerpage)} onChange={(_e,v)=>setVal(v-1)} color="primary" />
            </TableCell>
          </TableRow>
        </TableFooter> */}
        </Table>
      </TableContainer>
      <Box className="ul_pagination">
        <Pagination
          page={val + 1}
          count={Math.ceil(rows.length / rowsPerpage)}
          onChange={(_e, v) => setVal(v - 1)}
          color="primary"
        />
      </Box>
    </React.Fragment>
  );
}
