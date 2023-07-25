const baseUrl = process.env.NODE_ENV === 'production' ? 'https://chatbot-ai.herokuapp.com/' : 'http://localhost:3000/api';
export default baseUrl;