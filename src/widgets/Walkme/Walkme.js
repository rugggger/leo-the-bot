import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Walkme.css";
const Walkme = (props) => {
  const { answer } = props;
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const walkmeWidget = answer.widgets.find((w) => w.type === "Walkme");
    setSteps(walkmeWidget.params.steps);
  }, []);

  const stepsMarkup = steps.map((step, index) => (
    <li key={index} className="walkme-list-item">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          eval(step.command);
        }}
      >
        {step.text}
      </Button>
    </li>
  ));
  return <ul className="walkme-list">{stepsMarkup}</ul>;
};

export default Walkme;
