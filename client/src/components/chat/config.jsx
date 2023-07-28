import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';
import Overview from './components/Overview';
import ChatAI from './components/ChatAI';
const config = {
  initialMessages: [
    createChatBotMessage(`Hi, My name is Buck the Bunny. I am here to help you with your finances`),
    createChatBotMessage(`What would you like to know about?`, {
      widget: "overview",
      withAvatar: false,
      delay: 300
    }),

  ],
  botName: "Buck the Bunny",
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "chatAI",
      widgetFunc: (props) => <ChatAI {...props} />,
    }
  ]
};

export default config;