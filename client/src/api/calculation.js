import axios from 'axios';
import baseUrl from './baseUrl';

export const getTotalIncome = async () => { 
    const response = await axios.get(baseUrl + '/calculation/total-income');
    return response.data;
}

export const getTotalExpense = async () => {
    try {
    
        const response = await axios.get("http://localhost:3000/api/calculation/total-expense");
        return response.data;
    
    }
    catch (error) {
        console.log(error);
    }
}

export const getTotalBalance = async () => {
    const response = await axios.get(baseUrl + '/calculation/balance');
    return response.data;
}

