import axios from 'axios';
import baseUrl from './baseUrl';

export const sendChat = async (message) => {
    const response = await axios.post(baseUrl + '/chat/send', {
        message
    });
    return response.data;
}

