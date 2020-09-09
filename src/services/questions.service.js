import axios from "axios";

export default class QuestionsService {
  static buildMatchQuery(text) {
    const matchQuery = {
        question: text,
      };
  
    return matchQuery;
  }
  static buildQuery(options) {
    const { text } = options;
    return {
      "query": {
        "match": QuestionsService.buildMatchQuery(text)
      }
    };
  }
  static async getPossibleAnswers(message) {
    const endpoint = process.env.REACT_APP_ELASTIC_ENDPOINT;
    const indice = "dev_questions";
    const query = QuestionsService.buildQuery({
      text: message
    });
    console.log('quert ',query)
    const res = await axios.post(`${endpoint}/${indice}/_search`, query);

    if (res) {
      return res.data.hits.hits;
    }

    return null;
  }
}
