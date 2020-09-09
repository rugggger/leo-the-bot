import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../LearningOptions/LearningOptions";
import LinkList from "../LinkLists/LinkList";
import Thumbs from "../Thumbs/Thumbs";
import BotAvatar from "../chatCustomComponents/BotAvatar";
const config = {
  botName: "Leo the Bot",
  initialMessages: [
    createChatBotMessage(`Hi, what would you like to do in CS ?`, {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Links",
      widgetFunc: (props) => <LinkList {...props} />,
      mapStateToProps: ["answer"],
    },
    {
        widgetName: "thumbs",
        widgetFunc: (props) => <Thumbs {...props} />,
        mapStateToProps: ["lastMessage","messages"],
    }
  ],
  customComponents: {
    botAvatar: (props)=> <BotAvatar></BotAvatar>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
