import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
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
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState( {panel1:false,panel2:false,panel3:false});

  const handleChange = (panel) =>  {
    setExpanded({...expanded,[panel]: !expanded[panel] })
  };
  
  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={()=>handleChange("panel1")}
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
            <label htmlFor="desks">
              <input type="checkbox" name="desks" id="desks" />
              <p>Desks and Workspace</p>
            </label>
            <label htmlFor="Healthcare">
              <input type="checkbox" name="Healthcare" id="Healthcare" />
              <p>Healthcare</p>
            </label>
            <label htmlFor="Accessories">
              <input type="checkbox" name="Accessories" id="Accessories" />
              <p>Accessories</p>
            </label>
            <label htmlFor="JSI">
              <input type="checkbox" name="JSI" id="JSI" />
              <p>JSI</p>
            </label>
            <label htmlFor="Tables">
              <input type="checkbox" name="Tables" id="Tables" />
              <p>Tables</p>
            </label>
            <label htmlFor="Seating">
              <input type="checkbox" name="Seating" id="Seating" />
              <p>Seating</p>
            </label>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={()=>handleChange("panel2")}
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
            <label htmlFor="Traninig">
              <input type="checkbox" name="Traninig" id="Traninig" />
              <p>Traninig Tables</p>
            </label>
            <label htmlFor="Lounge">
              <input type="checkbox" name="Lounge" id="Lounge" />
              <p>Lounge Seating</p>
            </label>
            <label htmlFor="Benches">
              <input type="checkbox" name="Benches" id="Benches" />
              <p>Benches & Ottomans</p>
            </label>
            <label htmlFor="Occasional">
              <input type="checkbox" name="Occasional" id="Occasional" />
              <p>Occasional Tables</p>
            </label>
            <label htmlFor="sc">
              <input type="checkbox" name="sc" id="sc" />
              <p>Side Chairs</p>
            </label>
            <label htmlFor="tc">
              <input type="checkbox" name="tc" id="tc" />
              <p>Task Chairs</p>
            </label>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={()=>handleChange("panel3")}
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
            <label htmlFor="AIS">
              <input type="checkbox" name="AIS" id="AIS" />
              <p>AIS</p>
            </label>
            <label htmlFor="Darran">
              <input type="checkbox" name="Darran" id="Darran" />
              <p>Darran</p>
            </label>
            <label htmlFor="JSI2">
              <input type="checkbox" name="JSI2" id="JSI2" />
              <p>JSI</p>
            </label>
            <label htmlFor="Element">
              <input type="checkbox" name="Element" id="Element" />
              <p>Element Contract</p>
            </label>
            <label htmlFor="Stance">
              <input type="checkbox" name="Stance" id="Stance" />
              <p>Stance Healthcare</p>
            </label>
            <label htmlFor="Office">
              <input type="checkbox" name="Office" id="Office" />
              <p>Hush Office</p>
            </label>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
