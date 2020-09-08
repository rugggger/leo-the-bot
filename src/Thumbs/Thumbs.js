import React from "react";
import Emoji from "../misc/Emoji";

const Thumbs = (props) => {
  console.log('props th',props)
  return (
      <div>
          <button
          onClick={()=>{console.log('clicked ', props); }}
          ><Emoji emoji={"thumbsup"}/></button>
          <button
            onClick={props.actionProvider.handleThumbsDown}
          ><Emoji emoji={"thumbsdown"}/></button>
      </div>
  );
};

export default Thumbs;
