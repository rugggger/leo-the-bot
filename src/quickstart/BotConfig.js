import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import OptionsList from "../OptionsList/OptionsList";
import LinkList from "../widgets/LinkLists/LinkList";
import Thumbs from "../widgets/Thumbs/Thumbs";
import BotAvatar from "../chatCustomComponents/BotAvatar";
import Walkme from "../widgets/Walkme/Walkme";
const config = {
  botName: "Leo the Bot",
  initialMessages: [
    createChatBotMessage(`Hello there. I'm Leo the Bot, here to help you with any questions you have about using CS. Please ask me a question or select one of the below options.`, {
      widget: "OptionsList",
    }),
  ],
  state: {
      chatId: null
  },
  widgets: [
    {
      widgetName: "OptionsList",
      widgetFunc: (props) => <OptionsList {...props} />,
      mapStateToProps: ["answer","messages"],
      props: {options : [
        {
          text: "Zoning",
          optionId: "get_zoning_links",
          id: 1,
        },
        { 
          text: "Session Replay",
          optionId: "get_session_replay_links", 
          id: 2 
        },
        { 
          text: "CS Live", 
          optionId: "get_cslive_links",
          id: 3 
        },
      ]}
    },
    {
      widgetName: "Links",
      widgetFunc: (props) => <LinkList {...props} />,
      mapStateToProps: ["answer","messages"],
    },
    {
        widgetName: "thumbs",
        widgetFunc: (props) => <Thumbs {...props} />,
        mapStateToProps: ["lastMessage","messages"],
    },
    {
        widgetName: "Walkme",
        widgetFunc: (props) => <Walkme {...props} />,
        mapStateToProps: ["answer","messages"],

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
