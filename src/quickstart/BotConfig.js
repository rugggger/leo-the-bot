import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import OptionsList from "../OptionsList/OptionsList";
import LinkList from "../widgets/LinkLists/LinkList";
import Thumbs from "../widgets/Thumbs/Thumbs";
import BotAvatar from "../chatCustomComponents/BotAvatar";
import Walkme from "../widgets/Walkme/Walkme";

const botGender =  (Math.random() > 0.5) ? 'male' : 'female';
const config = {
  botName: "Leo the Bot",
  initialMessages: [
    createChatBotMessage(`Hello there. I'm Leo the Bot, here to help you with any questions you have about using CS.
     Please ask me a question or select one of the below options.`,{
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
      props: {defaultOptions : [
        {
          text: "Report an issue",
          optionId: "zendesk_report_an_issue",
          id: 1,
        },
        { 
          text: "Leave product feedback",
          optionId: "zendesk_product_feedback", 
          id: 2 
        },
        { 
          text: "Request an integration", 
          optionId: "zendesk_request_integration",
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
        widgetName: "Thumbs",
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
    botAvatar: (props)=> <BotAvatar {...props} gender={botGender} ></BotAvatar>
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
