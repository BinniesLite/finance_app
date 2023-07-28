import { useNavigate } from 'react-router-dom';

const handleNavigateTransaction = (addBotMessage, navigate) => {
  addBotMessage("Right away! Navigating to transactions");
  
  navigate('/transactions');
};

const handleNavigateWallet = (addBotMessage, navigate) => {
  addBotMessage("Right away! Navigating to wallet");
  
  navigate('/wallets');
};

const handleNavigateDashboard = (addBotMessage, navigate) => {
  addBotMessage("Right away! Navigating to dashboard");
  const navigate = useNavigate();
  navigate('/dashboard');
};

export { handleNavigateTransaction, handleNavigateWallet, handleNavigateDashboard };
