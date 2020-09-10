import axios from "axios";

export default class LogsService {
  static  Log(state, message, answer) {
    const { messages , chatId } = state;  
    const endpoint = process.env.REACT_APP_ELASTIC_ENDPOINT;
    const indice = "dev_logs";
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
        return axios.post(`${endpoint}/${indice}/_doc`, data);
    }
  }
}
