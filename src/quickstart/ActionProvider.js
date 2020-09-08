// ActionProvider starter code
import SlackService from "../services/slack.service";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
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
