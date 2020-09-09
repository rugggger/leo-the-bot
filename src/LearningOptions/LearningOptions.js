// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Zoning",
      handler: props.actionProvider.handleZoningList,
      id: 1,
    },
    { 
      text: "Session Replay", 
      handler: props.actionProvider.handleSessionReplayList,
      id: 2 
    },
    { 
      text: "CS Live", 
      handler: props.actionProvider.handleCsLiveList,
      id: 3 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
