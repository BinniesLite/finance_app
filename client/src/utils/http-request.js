import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

export const getTransactions = async () => {
    const response = await axios.get(baseUrl + '/transaction');
    return response.data;
}

export const createTransaction = async (transaction) => {
    const response = await axios.post(baseUrl + '/transaction/create', transaction);
    return response.data;
}



