import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

//wallets
export const getWallets = async () => {
  const response = await axios.get(baseUrl + '/wallet');
  return response.data;
};

export const getWallet = async (id) => {
  const response = await axios.get(baseUrl + '/wallet/' + id);
  return response.data;
};

export const postWallets = async (wallet) => {
  const response = await axios.post(baseUrl + '/wallet/create', wallet);
  return response.data;
};

export const updateWallet = async (id, wallet) => {
  const response = await axios.put(baseUrl + '/wallet/' + id, wallet);
  return response.data;
};

export const deleteWallet = async (id) => {
  const response = await axios.delete(baseUrl + '/wallet/' + id);
  return response.data;
};

//transactions api
export const getTransactions = async () => {
  const response = await axios.get(baseUrl + '/transaction');
  return response.data;
};

export const getTransaction = async (id) => {
  const response = await axios.get(baseUrl + '/transaction/' + id);
  return response.data;
};

export const updateTransaction = async (id, transaction) => {
  const response = await axios.put(baseUrl + '/transaction/' + id, transaction);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axios.delete(baseUrl + '/transaction/' + id);
  return response.data;
};

export const postTransactions = async (transaction) => {
  const response = await axios.post(
    baseUrl + '/transaction/create',
    transaction
  );
  return response.data;
};


export const getTransactionsByWalletId = async (id) => {
  const response = await axios.get(baseUrl + '/wallet/' + id + '/transactions');
  return response.data;
}

export const getTotalIncome = async () => {
  const response = await axios.get(baseUrl + '/calculation/total-income');
  return response.data;
}