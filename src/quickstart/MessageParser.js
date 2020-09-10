import QuestionsService from "../services/questions.service";
import LogsService from "../services/logs.service";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }


 
  async parse(message) {
    console.log('chat id ', this.state.chatId)
    const answers = await QuestionsService.getPossibleAnswers({
        text:message
    });
    const answer = QuestionsService.getBestAnswer(answers);
    const logRes = await LogsService.Log(this.state,message,answer);
    this.actionProvider.chooseAction(message,answer,logRes.data._id);
  }
}

export default MessageParser;
