// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "./OptionsList.css";

const OptionsList = (props) => {

  const { options, actionProvider } = props;

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
