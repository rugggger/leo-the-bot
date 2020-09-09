import axios from "axios";

export default class QuestionsService {
  static async getPossibleAnswers(message) {
    const endpoint = process.env.REACT_APP_ELASTIC_ENDPOINT;
    const indice = "dev_questions";
    const query = {};
    const res = await axios.post(`${endpoint}/${indice}/_search`, query);

    if (res) {
        return res.data.hits.hits;
    }

    return null;
  }
}
