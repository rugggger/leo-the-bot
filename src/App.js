import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import BotConfig from './quickstart/BotConfig';
import ActionProvider from './quickstart/ActionProvider';
import MessageParser from './quickstart/MessageParser';
import MenuListComposition from './menu/Menu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuListComposition/>
      </header>
      <div className="App-main">
      <Chatbot
        config={BotConfig}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
       />
      </div>
    </div>
  );
}

export default App;
