import axios from "axios";

export default class LogsService {
  
  static AddInitData(data){
      data["startedAt"] = Date.now()



  }  
  static  Log(state, message, answer) {
    const { messages , chatId } = state;  
    const endpoint = process.env.REACT_APP_ELASTIC_ENDPOINT;
    const indice = process.env.REACT_APP_ELASTIC_LOG_INDEX;
    const messagesMapped = messages.map((m) => {
      return {
        message: m.message
      };
    });
    messagesMapped.push({
        message: message,
    });
    messagesMapped.push({
        message: answer ? answer.answerText : "null",
    });

    const data = {
      messages: messagesMapped,
      chatId
    };

    if (chatId) {
        return axios.post(`${endpoint}/${indice}/_doc/${chatId}`, data);
    } else {
        this.AddInitData(data);
        return axios.post(`${endpoint}/${indice}/_doc`, data);
    }
  }
}
