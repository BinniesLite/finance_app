import React from "react";
import { useNavigate } from 'react-router-dom';
// Calculation 
import { getTotalIncome, getTotalExpense, getTotalBalance } from "@/api/calculation";
// GPT 
import { sendChat } from "@/api/chatAI";

import formatCurrency from "@/utils/formatCurrency";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();

  // Helper function to add a new message to the state
  const addBotMessage = (content, plugins) => {
    const botMessage = createChatBotMessage(content, plugins);
    setState((state) => ({
      ...state,
      messages: [...state.messages, botMessage],
    }));
  };

  const handleHello = () => {
    addBotMessage("Hello!");
    addBotMessage("Here're what I can do for you. Let me know if you need more assistance", {
      widget: "overview",
      loading: true,
      withAvatar: false
      });
  };

  const handlePeace = () => {
    addBotMessage("Peace out.");
  };

  const handleNavigateTransaction = () => {
    addBotMessage("Right away! Navigating to transactions");
    navigate('/transactions');
  };

  const handleOverview = () => {
    addBotMessage("Here're what I can do for you. Let me know if you need more assistance", {
      widget: "overview",
      loading: true
    });
  };


  const handleTotalIncome = async () => {
    const totalIncome = await getTotalIncome();
    addBotMessage(`Your total income is ${formatCurrency(totalIncome)}`);
  };

  const handleTotalExpense = async () => {
    
    const totalExpense = await getTotalExpense();
    
    console.log("Herre total expense");
    addBotMessage(`Your total expense is ${formatCurrency(totalExpense)}`);
  };

  const handleTotalBalance = async () => {
    const totalBalance = await getTotalBalance();
    addBotMessage(`Your total balance is ${formatCurrency(totalBalance)}`);
  };

  const handleNavigateWallet = () => {
    addBotMessage("Right away! Navigating to wallet");
    navigate('/wallets');
  };

  const handleDefault = () => {
    addBotMessage("Sorry, I don't understand. Please try again.");
    addBotMessage("Here're what I can do for you. Let me know if you need more assistance", {
      widget: "overview",
      loading: true,
      withAvatar: false 
    });

  };

  const handleNavigateDashboard = () => {
    addBotMessage("Right away! Navigating to dashboard");
    navigate('/dashboard');
  }

  const handleChatGPT = async (message) => {
    const response = await sendChat(message);
    addBotMessage(response.data);
  }



  // Pass the actions object with the helper functions to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handlePeace,
            handleNavigateTransaction,
            handleOverview,
            handleTotalIncome,
            handleNavigateWallet,
            handleDefault,
            handleNavigateDashboard,
            handleTotalExpense,
            handleTotalBalance,
            handleChatGPT
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
