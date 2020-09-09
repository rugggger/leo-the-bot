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
