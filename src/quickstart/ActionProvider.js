// ActionProvider starter code
import SlackService from "../services/slack.service";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  updateAnswer(answer) {
      this.setState((state) => ({
        ...state,
        answer,
      }));
  }
  handleAnswer(message,answer) {   
      return true;
  }
  handleTextWithLinks(answerText){
    const message = this.createChatBotMessage(
        answerText,
        {
          widget: "Links",
        }
      );
  
      this.updateChatbotState(message);

  }
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleZoningList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Zoning:",
      {
        widget: "zoningLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleSessionReplayList = () => {
    const message = this.createChatBotMessage(
      "Brilliant, I've got the some interesting resources for you on Session Replay:",
      {
        widget: "sessionReplayLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleCsLiveList = () => {
    const message = this.createChatBotMessage(
      "Yeah we have something new on CS Live but we do have guideline for it:",
      {
        widget: "csLiveLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleNoAnswerMatched(parsedMessage) {
    const message = this.createChatBotMessage(
      `Sorry, I don't understand "${parsedMessage}"`,
      {
        widget: "thumbs",
      }
    );

    this.updateChatbotState(message);
  }

  handleThumbsDown(message) {
    SlackService.sendMessage(message, "leo_test");
  }

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
