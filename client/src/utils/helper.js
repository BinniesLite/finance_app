import React, { useContext } from 'react';
import { faker } from '@faker-js/faker';
import { getWallet } from './http-request';
import AppContext from '../context/app/context';
import { formatDate } from './formatDate';

export const generateFakeTransactionData = (numberOfData) => {
  const fakeData = [];
  for (let i = 1; i <= numberOfData; i++) {
    fakeData.push({
      id: i,
      name: `Wallet ${i}`,
      amount: Math.floor(Math.random() * 1000) + 1,
    });
  }

  return fakeData;
};

export const generateFakeWalletData = (numberOfData) => {
  const fakeData = [];
  const type = ['credit card', 'cash'];
  for (let i = 1; i <= numberOfData; i++) {
    fakeData.push({
      id: i,
      name: `Wallet ${i}`,
      amount: Math.floor(Math.random() * 1000) + 1,
      date: '02/06/23',
      type: 'hello',
    });
  }

  return fakeData;
};

export const generateFakeUser = () => {
  const fakeUser = {
    name: faker.person.fullName(),
    balance: Math.floor(Math.random() * 1000) + 1,
    income: Math.floor(Math.random() * 1000) + 1,
    saving: Math.floor(Math.random() * 1000) + 1,
  };
  return fakeUser;
};

// Get the wallet name based on the id
const getWalletName = async (id) => {
  const { getWallet } = useContext(AppContext);
  try {
    const walletData = await getWallet(id);
    return walletData.name;
  } catch (error) {
    console.log(error);
  }
};

// Format the list of transactions
export const formatTransactionList = async (data) => {
  let transactionData = [];
  for (let i = 0; i < data.length; i++) {
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
