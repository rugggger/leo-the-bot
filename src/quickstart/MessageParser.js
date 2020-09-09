import QuestionsService from "../services/questions.service";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  getBestAnswer(answers) {
    if (answers.length > 0) {
        return answers[1]._source;
    }
  }
  defaultMethods(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
      return;
    } else if (lowerCaseMessage.includes("zoning")) {
        console.log('habdle zoning')

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
  chooseAction(message,answer) {
    this.actionProvider.updateAnswer(answer);
    switch (answer.answerType) {
        case "text_with_links": this.actionProvider.handleTextWithLinks(answer.answerText);
        break;
        default:
            this.defaultMethods(message);
        
    }
    return;
  }
  async parse(message) {
    console.log(message);
    console.log('state',this.state);
    const answers = await QuestionsService.getPossibleAnswers(message);
    console.log('answers',answers);
    const answer = this.getBestAnswer(answers);
    console.log(answer);
    this.chooseAction(message,answer);

     

  }
}

export default MessageParser;
