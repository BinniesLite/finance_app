import React from "react";

// eslint-disable-next-line react/prop-types
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message.toLowerCase();
    // demo
    if (message.includes("hello")) {
      

      actions.handleHello();
    }
    else if (message.includes("peace")) {
      actions.handlePeace();
    }
    else if (message.match(/\bgo\s+to\s+transactions?\b/gi)) {
      
      actions.handleNavigateTransaction();
    }
    // write a regex to match the word overview, as long as the message contain the word overview, it will trigger the handleOverview function
    else if (message.includes("overview") || message.includes("options")) {
      actions.handleOverview();
    }
    else if (message.includes("income") && message.includes("total")) {
      actions.handleTotalIncome(); 
    }
    else if (message.includes("expense") && message.includes("total")) {
      actions.handleTotalExpense(); 
    }
    else if (message.includes("balance") && message.includes("total")) {
      actions.handleTotalBalance(); 
    }
    else if (message.match(/go\s+to\s+wallet|navigate\s+to\s+wallet/i)) {
      actions.handleNavigateWallet();
    }
    else if (message.match(/go\s+to\s+dashboard|navigate\s+to\s+dashboard/i)) {
      actions.handleNavigateDashboard();
    }
    // create a regex to match the phrase give me some financial tips 
    else if (message.match(/give\s+me\s+some\s+financial\s+tips/i)) {
      actions.handleNavigateTransaction();
    }
    // AI Wallet
    else if (message.includes("give") && message.includes("wallet")) {
      actions.handleChatWallet(message.replace("give","").replace("me", ""));
    }
    else if (message.includes("give") && message.includes("transaction")) {
      actions.handleChat(message.replace("give","").replace("me", ""));
    }
    else if (message.includes("give") && message.includes("budget")) {
      actions.handleChatAI(message);
    }
    else if (message.includes("filter") && message.includes("transaction"))   {
      // Use regex to find income or expense if find income pass to the function, if find expense pass to the function
      if (message.match(/\bincome\b/gi)) {
        actions.handleFilterTransactions("income");
      }
      else if (message.match(/\bexpense\b/gi)) {
        actions.handleFilterTransactions("expense");
      }
    }
    else if (message.includes("tell")) {
      actions.handleChatGPT(message)
    }
    else {
      actions.handleDefault();
    }
  }
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
;}

export default MessageParser;
