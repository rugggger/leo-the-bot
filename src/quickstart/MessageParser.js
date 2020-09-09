import QuestionsService from "../services/questions.service";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  getBestAnswer(answers) {
    if (answers.length > 0) {
        return answers[0]._source;
    } else {
        return null;
    }
  }
  defaultMethods(message) {
      console.log('default methods')
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
      return;
    }
    this.actionProvider.handleNoAnswerMatched(message); 
  }
  chooseAction(message,answer) {
    this.actionProvider.updateAnswer(answer);
    if (!answer) {
        console.log('NO ANSWER')
        this.defaultMethods(message);
        return;
    }

    switch (answer.answerType) {
        case "text_with_links": this.actionProvider.handleTextWithLinks(answer.answerText);
        break;
        case "walkme": this.actionProvider.handleWalkme(answer.answerText);
        break;
        default:
            this.defaultMethods(message);
        
    }
    return;
  }
  async parse(message) {
    console.log(message);
    console.log('current state',this.state);
    const answers = await QuestionsService.getPossibleAnswers(message);
    console.log('answers',answers);
    const answer = this.getBestAnswer(answers);
    console.log('best answer ',answer);
    this.chooseAction(message,answer);

     

  }
}

export default MessageParser;
