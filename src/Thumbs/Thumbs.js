import React from "react";
import Emoji from "../misc/Emoji";

const Thumbs = (props) => {
  const { messages, actionProvider } = props;
  const { handleThumbsDown } = actionProvider;
  const getLastMessage = ()=>{
    return messages[messages.length-2].message
  }
  const lastMessage = getLastMessage();
  return (
      <div>
          <button
          onClick={()=>{console.log('clicked ', props); }}
          ><Emoji emoji={"thumbsup"}/></button>
          <button
            onClick={()=>{handleThumbsDown(lastMessage)}}
          ><Emoji emoji={"thumbsdown"}/></button>
      </div>
  );
};

export default Thumbs;
