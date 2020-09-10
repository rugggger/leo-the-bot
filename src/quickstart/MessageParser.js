import QuestionsService from "../services/questions.service";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }


 
  async parse(message) {
    const answers = await QuestionsService.getPossibleAnswers({
        text:message
    });
    const answer = QuestionsService.getBestAnswer(answers);
    this.actionProvider.chooseAction(message,answer);

  }
}

export default MessageParser;
