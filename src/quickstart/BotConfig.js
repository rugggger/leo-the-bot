  import { createChatBotMessage } from "react-chatbot-kit";
  
  const config = {
    botName: "Leo the Bot",
    initialMessages: [createChatBotMessage(`Hi, what would you like to do in CS ?`)],
    customStyles: {
        botMessageBox: {
          backgroundColor: "#376B7E",
        },
        chatButton: {
          backgroundColor: "#376B7E",
        },
      },
  }
  
  export default config