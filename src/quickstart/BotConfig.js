import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../LearningOptions/LearningOptions";
import LinkList from "../LinkLists/LinkList";
import Thumbs from "../Thumbs/Thumbs";
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
      widgetName: "zoningLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "ZenDesk's Introduction to Zoning",
            url:
              "https://uxanalyser.zendesk.com/hc/en-gb/articles/360010600620",
            id: 1,
          },
          {
            text: "Space Academy Training on Zoning",
            url:
              "https://academy.contentsquare.com/contentsquare-solution-training/265702/scorm/16jomvb7ix250",
            id: 2,
          },
          {
            text: "Content Square University's Training on Zoning Analysis",
            url:
              "https://learn.contentsquare.com/series/contentsquare-training-program/zoning-analysis-2",
            id: 3,
          }
        ],
      },
    },
    {
      widgetName: "sessionReplayLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "ZenDesk's Introduction to Session Replay",
            url:
              "https://uxanalyser.zendesk.com/hc/en-gb/articles/360001095054",
            id: 4,
          },
          {
            text: "Content Square University's Training on Session Replay",
            url:
              "https://learn.contentsquare.com/series/contentsquare-training-program/session-replay-3",
            id: 5,
          }
        ],
      },
    },
    {
      widgetName: "csLiveLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "ZenDesk's CS Live - How to create a zoning?",
            url:
              "https://uxanalyser.zendesk.com/hc/en-gb/articles/360001095054",
            id: 6,
          },
          {
            text: "CS Live Quick Start Guide",
            url:
              "https://go.contentsquare.com/hubfs/%5BCS%20Live%5D%20Booklet%20Metrics.pdf",
            id: 7,
          }
        ],
      },
    },
    {
        widgetName: "thumbs",
        widgetFunc: (props) => <Thumbs {...props} />,
        mapStateToProps: ["lastMessage","messages"],
    }
  ],
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
