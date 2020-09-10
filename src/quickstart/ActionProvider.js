// ActionProvider starter code
import SlackService from "../services/slack.service";
import QuestionsService from "../services/questions.service";
import LogsService from "../services/logs.service";
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

  createClientMesssage = (message) => {
    const clientMessage = {
      message: message,
      type: "user",
      id: Math.random(),
    };

    return clientMessage;
  };

  setClientMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  setChatId = (chatId) => {
    this.setState((prevState) => ({
      ...prevState,
      chatId,
    }));
  };

  async handleOptionsList(option) {
    const clientMessage = this.createClientMesssage(
      "I'm looking for links about " + option.text
    );
    const answers = await QuestionsService.getPossibleAnswers({
      option: option.optionId,
    });
    const answer = QuestionsService.getBestAnswer(answers);
    this.setClientMessage(clientMessage);
    this.chooseAction("", answer);
  }
  handleTextWithLinks(answerText) {
    const message = this.createChatBotMessage(answerText, {
      widget: "Links",
    });

    this.updateChatbotState(message);
  }
  handleWalkme(answerText) {
    const message = this.createChatBotMessage(answerText, {
      widget: "Walkme",
    });
    this.updateChatbotState(message);
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }



  chooseAction(message, answer, chatId) {
    console.log("choosing answer : Action Provider");
    this.setChatId(chatId);
    this.updateAnswer(answer);
    if (!answer) {
      this.handleNoAnswerMatched(message);
      return;
    }

    switch (answer.answerType) {
      case "text_with_links":
        this.handleTextWithLinks(answer.answerText);
        break;
      case "walkme":
        this.handleWalkme(answer.answerText);
        break;
      default:
       this.handleNoAnswerMatched(message);
    }
    return;
  }

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
