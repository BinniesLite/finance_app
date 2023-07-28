import axios from 'axios';
import baseUrl from './baseUrl';

export const sendChat = async (message) => {
    const response = await axios.post(baseUrl + '/chat/send', {
        message
    });
    return response.data;
}

export const sendChatWallet = async (message) => {
    const response = await axios.post(baseUrl + '/chat/send-wallet', {
        message
    });
    
    return response.data;
}

export const sendChatTransaction = async (message) => {
    try {
        const response = await axios.post(baseUrl + '/chat/send-transaction', {
            message
        });
        
        return response.data;
    }
    catch (error) {
        console.log(error);
    
    }

}
