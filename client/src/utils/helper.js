import { faker } from "@faker-js/faker";
import { getWallet, postWallets, getWallets, postTransactions } from "./http-request";
import { formatDate } from "./formatDate";

export const generateFakeTransactionData = async (numberOfData) => {
  const fakeData = [];
  try {
    var wallets = await getWallets();
  } catch(error) {
    console.log(error);
  };
  const typeTrans = ["expense", "income"];
  for (let i = 1; i <= numberOfData; i++) {
    const randomInRange = Math.floor(Math.random() * (wallets.length - 0 + 1)) + 0;
    const randomType = Math.round(Math.random());
    const randomText = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    fakeData.push({
      walletId: wallets[randomInRange].id,
      amount: Math.floor(Math.random() * 1000) + 1,
      type: typeTrans[randomType],
      description: faker.lorem.words(randomText),
      createdAt: faker.date.anytime(),
    });
  }
  return fakeData;
};

export const pushTransactions = async (transactionList) => {
  try{
    for(let i =0; i<transactionList.length; i++) {
      const res = await postTransactions(transactionList[i]);
      console.log("Create trans: ", transactionList[i]);
    }
  } catch(error) {
    console.log(error);
  }
  
};

export const generateFakeWallets = (numberOfWallets) => {
  var fakeWallets = [];
  for(let i =0; i<numberOfWallets; i++) {
    var wallet = {
      name: faker.finance.accountName(),
      description: faker.lorem.text(),
    }
    fakeWallets.push(wallet);
  }
  return fakeWallets;
};

export const pushWallets = async (wallets) => {
  try {
    for(let i = 0; i<wallets.length; i++) {
      await postWallets(wallets[i]);
    }
  } catch(error) {
    console.log(error);
  }
};

// Get the wallet name based on the id
const getWalletName = async (id) => {
      try {
        const walletData = await getWallet(id);
        return walletData.name;
      } catch (error) {
        console.log(error);
      }
};

// Format the list of transactions
export const formatTransactionList = async (data) => {
  let transactionData = []
  for (let i =0; i<data.length; i++) {
    const transaction = data[i];
    const walletName = await getWalletName(transaction.walletId);
    let formatteData = {
      walletName: walletName,
      amount: transaction.amount,
      createdAt: formatDate(transaction.createdAt),
      description: transaction.description,
      type: transaction.type,
    };
    transactionData.push(formatteData);
  }
  return transactionData;
};