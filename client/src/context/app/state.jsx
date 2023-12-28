import React, { useReducer } from 'react';
import AppContext from './context';
import AppReducer from './reducer';
import baseUrl from '@/api/baseUrl';
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios';

import {
  GET_WALLETS,
  ADD_WALLET,
  DELETE_WALLET,
  WALLET_ERROR,
  GET_TRANSACTIONS,
  TRANSACTION_ERROR,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TOTAL_INCOME,
  GET_TOTAL_EXPENSES,
  GET_TOTAL_BALANCE,
  SET_LOADING,
} from '../types';
// import axiosInstance from '../../utils/reqHeader';

const AppState = (props) => {
  const { user } = useAuthContext();
  const initialState = {
    wallets: [],
    transactions: [],
    totalIncome: [],
    totalExpenses: [],
    totalBalance: [],
    error: null,
    loading: false,
    user: user,
    token: user ? user.token : null,
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const configAuth = {
    headers: {
      'Authorization': `Bearer ${initialState.token}`,
    },
  };

  const configContent = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${initialState.token}`,
    },
  };

  // Get Wallets
  const getWallets = async () => {
    setLoading();
    try {
      console.log('before res');
      const res = await axios.get(baseUrl + '/wallet', configAuth);
      console.log('res', res.data);
      dispatch({
        type: GET_WALLETS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WALLET_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Wallet
  const addWallet = async (wallet) => {
    setLoading();
    console.log('wallet in state', wallet);
    console.log('token in state addwallet', initialState.token);
    console.log('configContent in state addwallet', configContent);
    try {
      const res = await axios.post(
        baseUrl + '/wallet/create',
        wallet,
        configContent
      );
      dispatch({
        type: ADD_WALLET,
        payload: res.data,
      });
      return res.data;
    } catch (err) {
      console.error(err);
      console.log(err.response.data); // Log the detailed error if available
      dispatch({
        type: WALLET_ERROR,
        payload: err.response.data.msg, // Use err.response.data.msg if your server sends back a 'msg' field
      });
    }
  };

  // Delete Wallet
  const deleteWallet = async (id) => {
    setLoading();
    try {
      await axios.delete(baseUrl + `/wallet/${id}`, configAuth);
      // await axiosInstance.delete(baseUrl + `/wallet/${id}`, configAuth);
      dispatch({
        type: DELETE_WALLET,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: WALLET_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Update Wallet
  const updateWallet = async (wallet) => {
    setLoading();
    try {
      const res = await axios.put(
        baseUrl + `/wallet/${wallet._id}`,
        wallet,
        configContent
      );
      // const res = await axiosInstance.put(baseUrl + `/wallet/${id}`, wallet, configContent);
      dispatch({
        type: UPDATE_WALLET,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WALLET_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get Transactions
  const getTransactions = async (type) => {
    setLoading();
    try {
      const res = await axios.get(baseUrl + '/transaction', {
        params: {
          type: type,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')} `,
        },
      });
      // const res = await axiosInstance.get(baseUrl + '/transaction', {
      //   params: {
      //     type: type,
      //   }
      // });

      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Transaction
  const addTransaction = async (transaction) => {
    setLoading();
    try {
      const res = await axios.post(
        baseUrl + '/transaction/create',
        transaction,
        configContent
      );
      // const res = await axiosInstance.post(baseUrl + '/transaction/create', transaction, configContent);
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(baseUrl + `/transaction/${id}`, configAuth);
      // await axiosInstance.delete(baseUrl + `/transaction/${id}`);
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get Total Income
  const getTotalIncome = async () => {
    setLoading();
    const res = await axios.get(
      baseUrl + '/calculation/total-income',
      configAuth
    );
    // const res = await axiosInstance.get(baseUrl + '/calculation/total-income');
    dispatch({
      type: GET_TOTAL_INCOME,
      payload: res.data,
    });
  };

  // Get Total Expenses
  const getTotalExpenses = async () => {
    setLoading();
    const res = await axios.get(
      baseUrl + '/calculation/total-expense',
      configAuth
    );
    // const res = await axiosInstance.get(baseUrl + '/calculation/total-expense');
    dispatch({
      type: GET_TOTAL_EXPENSES,
      payload: res.data,
    });
  };

  // Get Total Balance
  const getTotalBalance = async () => {
    setLoading();
    const res = await axios.get(baseUrl + '/calculation/balance', configAuth);
    // const res = await axiosInstance.get(baseUrl + '/calculation/balance');
    dispatch({
      type: GET_TOTAL_BALANCE,
      payload: res.data,
    });
  };

  return (
    <AppContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        wallets: state.wallets,
        transactions: state.transactions,
        totalIncome: state.totalIncome,
        totalExpenses: state.totalExpenses,
        totalBalance: state.totalBalance,
        loading: state.loading,
        getWallets,
        addWallet,
        deleteWallet,
        updateWallet,
        getTransactions,
        addTransaction,
        deleteTransaction,
        getTotalIncome,
        getTotalExpenses,
        getTotalBalance,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
