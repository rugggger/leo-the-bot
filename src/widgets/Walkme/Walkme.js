import React from "react";
import { Button } from "@material-ui/core";
import "./Walkme.css"
const Walkme = (props) => {
  console.log('props are ', props);
  const { answer } = props;
  if (!answer) {
    return null
  }
  const walkmeWidget = answer.widgets.find(w => w.type === 'Walkme');
  if (!walkmeWidget) {
    return null
  }
  console.log('walk', walkmeWidget);
  const stepsMarkup = walkmeWidget.params.steps.map((step,index) => (
    <li key={index} className="walkme-list-item">
        <Button 
        variant="contained"
        color="primary"
        onClick={()=>{eval(step.command)}}
        >{step.text}</Button>
    </li>
  ));
  return <ul className="walkme-list">{stepsMarkup}</ul>;
};

export default Walkme;
