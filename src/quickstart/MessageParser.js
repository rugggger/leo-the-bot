import QuestionsService from "../services/questions.service";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  getBestAnswer(answers) {
    if (answers.length > 0) {
        return answers[0]._source;
    }
  }
  chooseAction(answer) {
      
  }
  async parse(message) {
    console.log(message);
    const answers = await QuestionsService.getPossibleAnswers(message);
    console.log('answers',answers);
    const answer = this.getBestAnswer(answers);
    console.log(answer);

    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
      return;
    } else if (lowerCaseMessage.includes("zoning")) {
        this.actionProvider.handleZoningList();
        return;
    } else if (lowerCaseMessage.includes("session") || lowerCaseMessage.includes("replay")) {
        this.actionProvider.handleSessionReplayList();
        return;
    } else if (lowerCaseMessage.includes("live")) {
        this.actionProvider.handleCsLiveList();
        return;
    }
    this.actionProvider.handleNoAnswerMatched(message);  

  }
}

export default MessageParser;
