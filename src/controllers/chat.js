// Define a variable to store the conversation history
const httpStatus = require("http-status");
const prisma = require("../db/prisma");
const { Configuration, OpenAIApi } = require("openai");

// intialize openai api
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.CHATGPT_SECRET_KEY })
);

let conversationHistory = [
  {
    role: "system",
    content:
      "Act as a Financial Advisor named Buck Budget, you know everything about the user's financial situation and you can help them to manage their money, say you're not sure when ask about anything else. You're not a chatbot you're Buck, always go by Buck. DO NOT INCLUDE JSON OR ANY TECHNICAL PROGRAMMING WORD IN YOUR RESPONSES.",
  },
];

const initiateChat = async (req, res) => {
  try {
    res.json({
      role: "assistant",
      content:
        "Hi My name is Buck Budget, I'm here for everything you need to know about your financial situation",
    });
  } catch (error) {
    console.log(error);
  }
};

const sendChat = async (req, res) => {
  try {
    // Extract user message from the request
    const userMessage = req.body.message;

    // Add the user's message to the conversation history
    conversationHistory.push({ role: "user", content: userMessage });

    // Send the updated conversation history to OpenAI API
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: conversationHistory,
    });

    if (response.data.error) {
      console.error("OpenAI API Error:", response.data.error);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
    // Store the AI's response in the conversation history
    conversationHistory.push({
      role: "assistant",
      content: response.data.choices[0].message.content,
    });

    // Send the AI's response to the client
    res.status(httpStatus.OK).json({
      conversationHistory: conversationHistory,
      data: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong :(",
    });
  }
};
// document this
/*
  sendChatWallet

  input: message from user
  output: list of wallets with ai response
*/
const sendChatWallet = async (req, res) => {
  try {
    // Extract user message from the request
    const userMessage = req.body.message;

    // get the first 20 wallets
    const wallets = await prisma.wallet.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        balance: true,
        transactions: {
          take: 5,
        },
        createdAt: true,
      },
    });

    // turn the wallets into a string
    // and remove all the \n and \
    // so that the ai can parse it

    const walletsString = JSON.stringify(wallets)
      .replace(/\\n/g, "")
      .replace(/\\/g, "")
      .replace(/"/g, "");

    const prompt = `Based on this JSON object representing the wallets data:\n${walletsString}\n Answer the prompt ${userMessage || "brief analysis"} as naturally as possible `;

    
    // Add the user's message to the conversation history
    conversationHistory.push({ role: "user", content: prompt });

    // Send the updated conversation history to OpenAI API
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: conversationHistory,
    });

    if (response.data.error) {
      console.error("OpenAI API Error:", response.data.error);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
    
    // Store the AI's response in the conversation history
    conversationHistory.push({
      role: "assistant",
      content: response.data.choices[0].message.content,
    });

    res.status(httpStatus.OK).json({
      conversationHistory: conversationHistory,
      data: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong :(",
    });
  }
};

const sendChatTransaction = async (req, res) => {
  try {
    res.json({
      role: "assistant",
      content:
        "Hi My name is Buck Budget, I'm here for everything you need to know about your financial situation",
    });
  } catch (error) {
    console.log(error);
  }
};

const clearConversationHistory = () => {
  conversationHistory = [];
};




module.exports = {
  initiateChat,
  sendChat,
  sendChatWallet,
  sendChatTransaction,
};
