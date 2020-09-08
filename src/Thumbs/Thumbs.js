import React from "react";
import Emoji from "../misc/Emoji";
import Button from "@material-ui/core/Button";

const Thumbs = (props) => {
  const { messages, actionProvider } = props;
  const { handleThumbsDown } = actionProvider;
  const getLastMessage = () => {
    return messages[messages.length - 2].message;
  };
  const lastMessage = getLastMessage();
  return (
    <div>
      <Button
        onClick={() => {
          console.log("clicked ", props);
        }}
      >
        <Emoji emoji={"thumbsup"} />
      </Button>

      <Button
        onClick={() => {
          handleThumbsDown(lastMessage);
        }}
      >
        <Emoji emoji={"thumbsdown"} />
      </Button>
    </div>
  );
};

export default Thumbs;
