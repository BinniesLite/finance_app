import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
// Calculation
import {
  getTotalIncome,
  getTotalExpense,
  getTotalBalance,
} from "@/api/calculation";
// GPT
import { sendChat, sendChatWallet, sendChatTransaction } from "@/api/chatAI";

// API request
import AppContext  from "@/context/app/context";

import formatCurrency from "@/utils/formatCurrency";

// theme
import { useTheme } from "@/context/theme-context/theme-context";


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setActivePage } = useTheme();
  const {  getTransactions } = useContext(AppContext);

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
    addBotMessage(
      "Here're what I can do for you. Let me know if you need more assistance",
      {
        widget: "overview",
        loading: true,
        withAvatar: false,
      }
    );
  };

  const handlePeace = () => {
    addBotMessage("Peace out.");
  };

  const handleNavigateTransaction = () => {
    addBotMessage("Right away! Navigating to transactions");

    setActivePage("transactions");

    navigate("/transactions");
  };

  const handleOverview = () => {
    addBotMessage(
      "Here're what I can do for you. Let me know if you need more assistance",
      {
        widget: "overview",
        loading: true,
      }
    );
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
    setActivePage("wallets");
    navigate("/wallets");
  };

  const handleDefault = () => {
    addBotMessage("Sorry, I don't understand. Please try again.");
    addBotMessage(
      "Here're what I can do for you. Let me know if you need more assistance",
      {
        widget: "overview",
        loading: true,
        withAvatar: false,
      }
    );
  };

  const handleNavigateDashboard = () => {
    addBotMessage("Right away! Navigating to dashboard");
    setActivePage("dashboard");
    navigate("/dashboard");
  };

  const handleChatGPT = async (message) => {
    try {
      const response = await sendChat(message);
    addBotMessage(response.data);
    }
    catch (error) {
      addBotMessage(
        "Sorry we have some errors currently please try again late, in the mean time here're some fun fact about dogs: "
      );
      console.log(error);
    }
  };

  const handleChatWallet = async (message) => {
    try {
      setLoading(true); // Set loading state to true when request starts
      const response = await sendChatWallet(message);
      addBotMessage(response.data, {
        loading: false, // Set loading state to false when request completes
        withAvatar: false,
      });
    } catch (error) {
      addBotMessage(
        "Sorry we have some errors currently, please try again later"
      );
      console.log(error);
    } finally {
      setLoading(false); // Make sure to clear loading state in case of any errors too
    }
  };

  const handleChatTransaction = async (message) => {
    try {
      setLoading(true); // Set loading state to true when request starts
      const response = await sendChatTransaction(message);
      addBotMessage(response.data, {
        loading: false, // Set loading state to false when request completes
        withAvatar: false,
      });
    } catch (error) { 
      addBotMessage(
        "Sorry we have some errors currently, please try again later"
      );
      console.log(error);
    } finally {
      setLoading(false); // Make sure to clear loading state in case of any errors too
    }
  }


  const handleChatAI = (message) => {
    addBotMessage("Right Away",{
      loading: true,
      withAvatar: false,
      widget: "chatAI",
    })
  }
  
  const handleFilterTransactions = async (type) => {
    
    try {
      addBotMessage("Done!", {
        loading: true,
        
      })
      
      const response = await getTransactions(type);
      addBotMessage(response.data, {
        loading: true, // Set loading state to false when request completes
        withAvatar: false,
      });
    } catch (error) {
      addBotMessage(
        "Sorry we have some errors currently, please try again later"
      );


      console.log(error);
    } finally {
      setLoading(false); // Make sure to clear loading state in case of any errors too
    }
  };


  // Pass the actions object with the helper functions to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            // Demo 
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
            handleChatGPT,
            handleChatWallet,
            handleChatAI,
            handleFilterTransactions,
            handleChatTransaction,
          },

        });
      })}
    </div>
  );
};

export default ActionProvider;
