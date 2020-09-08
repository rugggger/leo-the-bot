class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
      return;
    }
    if (lowerCaseMessage.includes("zoning")) {
        this.actionProvider.handleZoningList();
        return;
      }
    this.actionProvider.handleNoAnswerMatched(message);  

  }
}

export default MessageParser;
