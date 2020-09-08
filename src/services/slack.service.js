import axios from 'axios';

const channels = {
    "leo_the_bot" :{
        code: "B01AM4P1PA5/jGd0W8e6WkgMnIICRWQS93JS"
    },
    "leo_test": {
        code: "B01A8NJTPH8/S2ooQoKA5zU0jpO1rYvWgWQ3"
    }
}
export default class SlackService {
    

    static async sendMessage(message, channel){
        const channelObj = channels[channel];
        const endpoint = process.env.REACT_APP_SLACK_ENDPOINT;
        const url = `${endpoint}/${channelObj.code}`
        const data = {
            text: "sent from chatbot"
        }
        console.log('send message to slack ', message, channel);
        if (process.env.NODE_ENV==='development') {
            return;
        }

        await axios.post(url, JSON.stringify(data), {
            withCredentials: false,
            transformRequest: [(data, headers) => {
              delete headers.post["Content-Type"]
              return data
            }]
          });

    }
}