import axios from "axios";

export default class QuestionsService {
  static buildMatchQuery(text) {
    const matchQuery = {
        question: text,
      };
  
    return matchQuery;
  }
  static buildOptionQuery(optionId) {
    const optionQuery = {
        optionId,
      };
  
    return optionQuery;
  }
  static buildQuery(options) {
    const { text, option } = options;

    const query = {
      "query": {}
    };
    if (text) {
      query["query"]["match"] =  QuestionsService.buildMatchQuery(text);
    }
    if (option) {
      query["query"]["term"] = QuestionsService.buildOptionQuery(option)
    }

    return query;
  }
  
  static async getPossibleAnswers(options) {
    const { text, option } = options;
    const endpoint = process.env.REACT_APP_ELASTIC_ENDPOINT;
    const indice = "dev_questions";
    const query = QuestionsService.buildQuery({
      text,
      option
    });
    console.log('quert ',query)
    const res = await axios.post(`${endpoint}/${indice}/_search`, query);

    if (res) {
      return res.data.hits.hits;
    }

    return null;
  }
  static getBestAnswer(answers){
    if (answers.length > 0) {
      return answers[0]._source;
  } else {
      return null;
  }

  }
}
