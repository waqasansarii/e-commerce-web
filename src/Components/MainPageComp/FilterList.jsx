import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import {useSelector,useDispatch} from 'react-redux'
import {tagsAdd} from '../../GlobalState/CreateSlice'
// assets
import more from "../../Assets/sort-down.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 30,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  list: {
    marginTop: 10,
    border: "1px solid #dedede",
    boxShadow: "none",
    borderRadius: 6,
  },
}));

export default function ControlledAccordions() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>{
    return state.cardReducer.checkbox
  })
  // console.log(selector)

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({
    panel1: false,
    panel2: false,
    panel3: false,
  });

  const handleChange = (panel) => {
    setExpanded({ ...expanded, [panel]: !expanded[panel] });
  };

  const handleChecked = (e)=>{
    const checked = e.target.checked 
    const cValue = e.target.value 
    const dataid = e.target.dataset.id
      dispatch(tagsAdd({checked,dataid,cValue}))
  }

  return (
    <div className={classes.root}>
      <Accordion
        onChange={() => handleChange("panel1")}
        className={classes.list}
      >
        <AccordionSummary
          expandIcon={<img src={more} alt="..." />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Product Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter_check">
            {selector.slice(0, 6).map((val, id) => (
              <label key={val.val} htmlFor={val.val}>
                <input
                  type="checkbox"
                  onChange={handleChecked}
                  data-id={id}
                  value={val.val}
                  name={val.val}
                  id={val.val}
                  checked={val.bool}
                />
                <p>{val.val}</p>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // expanded={expanded === "panel2"}
        onChange={() => handleChange("panel2")}
        className={classes.list}
      >
        <AccordionSummary
          expandIcon={<img src={more} alt="..." />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter_check">
            {selector.slice(6, 12).map((val, id) => (
              <label key={val.val} htmlFor={val.val}>
                <input
                  type="checkbox"
                  onChange={handleChecked}
                  data-id={id +6}
                  value={val.val}
                  name={val.val}
                  id={val.val}
                  checked={val.bool}
                />
                <p>{val.val}</p>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={() => handleChange("panel3")}
        className={classes.list}
      >
        <AccordionSummary
          expandIcon={<img src={more} alt="..." />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter_check">
            {selector.slice(12, 18).map((val, id) => (
              <label key={val.val} htmlFor={val.val}>
                <input
                  type="checkbox"
                  onChange={handleChecked}
                  data-id={id +12}
                  value={val.val}
                  name={val.val}
                  id={val.val}
                  checked={val.bool}
                />
                <p>{val.val}</p>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
