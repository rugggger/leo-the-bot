import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import BotConfig from './quickstart/BotConfig';
import ActionProvider from './quickstart/ActionProvider';
import MessageParser from './quickstart/MessageParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot
        config={BotConfig}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
       />
      </header>
    </div>
  );
}

export default App;
