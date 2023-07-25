import axios from 'axios';
import baseUrl from './baseUrl';

export const getTotalIncome = async () => { 
    const response = await axios.get(baseUrl + '/calculation/total-income');
    return response.data;
}

export const getTotalExpense = async () => {
    const response = await axios.get(baseUrl + '/calculation/total-expense');
    return response.data;
}

export const getTotalBalance = async () => {
    const response = await axios.get(baseUrl + '/calculation/balance');
    return response.data;
}

