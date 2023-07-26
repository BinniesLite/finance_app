import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './context';
import AppReducer from './reducer';
import baseUrl from '@/api/baseUrl';

import 
{
  GET_WALLETS,
  ADD_WALLET,
  DELETE_WALLET,
  WALLET_ERROR,
  GET_TRANSACTIONS,
  TRANSACTION_ERROR,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_INCOME,
  GET_EXPENSES,
  GET_BALANCE,
  GET_TOTAL_INCOME,
  GET_TOTAL_EXPENSES,
  GET_TOTAL_BALANCE,
  SET_LOADING,
} from '../types';

const AppState = (props) => {
  const initialState = {
    wallets: [],
    transactions: [],
    income: [],
    expenses: [],
    balance: [],
    totalIncome: [],
    totalExpenses: [],
    totalBalance: [],
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Wallets
  const getWallets = async () => {
    dispatch({ type: SET_LOADING });
    try {
      console.log(baseUrl);
      const res = await axios.get(baseUrl + '/wallet');
      
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

  // Get Wallets by ID
  // const getWallet = async (id) => {
  //   setLoading();
  //   try {
  //     const res = await axios.get(baseUrl + `/wallet/${id}`);
  //     dispatch({
  //       type: GET_WALLETS,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: WALLET_ERROR,
  //       payload: err.response.msg,
  //     });
  //   }
  // };

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
    
    console.log(baseUrl);
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
  return (
    <AppContext.Provider
      value={{
        wallets: state.wallets,
        transactions: state.transactions,
        income: state.income,
        expenses: state.expenses,
        balance: state.balance,
        totalIncome: state.totalIncome,
        loading: state.loading,
        getWallets,
        addWallet,
        deleteWallet,
        updateWallet,
        getTransactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
