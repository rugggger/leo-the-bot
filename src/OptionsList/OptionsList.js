// in src/components/LearningOptions/LearningOptions.jsx

import React, { useEffect, useState } from "react";

import "./OptionsList.css";

const OptionsList = (props) => {

  const { answer , defaultOptions, actionProvider } = props;
  const [ options , setOptions] = useState(defaultOptions);

  useEffect(()=>{
    if (answer) {
      const optionsWidget = answer.widgets.find(w => w.type === 'OptionsList');
      setOptions(optionsWidget.params.options);
    }
   
  },[]);

  const handlerOption = (option)=>{
    actionProvider.handleOptionsList(option);
  }

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={()=>{handlerOption(option)}}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default OptionsList;
