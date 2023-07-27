import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './context';
import AppReducer from './reducer';

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
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../types';

const AppState = (props) => {
  const initialState = {
    wallets: [],
    transactions: [],
    totalIncome: [],
    totalExpenses: [],
    totalBalance: [],
    error: null,
    loading: false,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const baseUrl = 'http://localhost:3000/api';

  // Get Wallets
  const getWallets = async () => {
    setLoading();
    const res = await axios.get(baseUrl + '/wallet');
    dispatch({
      type: GET_WALLETS,
      payload: res.data,
    });
  };

  // Add Wallet
  const addWallet = async (wallet) => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(baseUrl + '/wallet/create', wallet, config);
      dispatch({
        type: ADD_WALLET,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: WALLET_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Wallet
  const deleteWallet = async (id) => {
    setLoading();
    try {
      await axios.delete(baseUrl + `/wallet/${id}`);
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
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        baseUrl + `/wallet/${wallet._id}`,
        wallet,
        config
      );
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
  const getTransactions = async () => {
    setLoading();
    try {
      const res = await axios.get(baseUrl + '/transaction');
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

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        baseUrl + '/transaction/create',
        transaction,
        config
      );
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
      await axios.delete(baseUrl + `/transaction/${id}`);
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
    const res = await axios.get(baseUrl + '/calculation/total-income');
    dispatch({
      type: GET_TOTAL_INCOME,
      payload: res.data,
    });
  };

  // Get Total Expenses
  const getTotalExpenses = async () => {
    setLoading();
    const res = await axios.get(baseUrl + '/calculation/total-expense');
    dispatch({
      type: GET_TOTAL_EXPENSES,
      payload: res.data,
    });
  };

  // Get Total Balance
  const getTotalBalance = async () => {
    setLoading();
    const res = await axios.get(baseUrl + '/calculation/balance');
    dispatch({
      type: GET_TOTAL_BALANCE,
      payload: res.data,
    });
  }
  
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
