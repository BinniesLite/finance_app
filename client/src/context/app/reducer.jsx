import {
  GET_WALLETS,
  ADD_WALLET,
  DELETE_WALLET,
  GET_TRANSACTIONS,
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

export default (state, action) => {
  switch (action.type) {
    case GET_WALLETS:
      return {
        ...state,
        wallets: action.payload,
        loading: false,
      };
    case ADD_WALLET:
      return {
        ...state,
        wallets: [...state.wallets, action.payload],
        loading: false,
      };
    case DELETE_WALLET:
      return {
        ...state,
        wallets: state.wallets.filter(
          (wallet) => wallet._id !== action.payload
        ),
        loading: false,
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        loading: false,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
        loading: false,
      };
    case GET_INCOME:
      return {
        ...state,
        income: action.payload,
        loading: false,
      };
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
      };
    case GET_BALANCE:
      return {
        ...state,
        balance: action.payload,
        loading: false,
      };
    case GET_TOTAL_INCOME:
      return {
        ...state,
        totalIncome: action.payload,
        loading: false,
      };
    case GET_TOTAL_EXPENSES:
      return {
        ...state,
        totalExpenses: action.payload,
        loading: false,
      };
    case GET_TOTAL_BALANCE:
      return {
        ...state,
        totalBalance: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


