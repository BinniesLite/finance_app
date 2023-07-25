import { useNavigate } from 'react-router-dom';

const handleNavigateTransaction = (addBotMessage) => {
  addBotMessage("Right away! Navigating to transactions");
  const navigate = useNavigate();
  navigate('/transactions');
};

const handleNavigateWallet = (addBotMessage) => {
  addBotMessage("Right away! Navigating to wallet");
  const navigate = useNavigate();
  navigate('/wallets');
};

const handleNavigateDashboard = (addBotMessage) => {
  addBotMessage("Right away! Navigating to dashboard");
  const navigate = useNavigate();
  navigate('/dashboard');
};

export { handleNavigateTransaction, handleNavigateWallet, handleNavigateDashboard };
