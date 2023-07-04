import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import SignInPage from './components/pages/SignInPage/SignInPage';
import WalletsPage from './components/pages/WalletsPage/WalletsPage';

import Transaction from './components/Layout/AddTransactionComponent/Transaction';
import TransactionPage from './components/pages/TransactionPage/TransactionsPage';
import WalletCard from './components/Layout/WalletCard/WalletCard';
import HistoryCard from './components/Layout/HistoryCard/HistoryCard';
import AddWallet from './components/Layout/AddWallet/AddWallet';

import './App.css';
import WalletComponent from './components/Layout/WalletComponent/WalletComponent';
import TransactionComponent from './components/Layout/AddTransactionComponent/Transaction';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';

function App() {
  return (
    <>
      {/* TODO these routes are just for testing purpose, delete the routes after done. */}
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/trans" element={<TransactionComponent />} />
          <Route path="/wallets" element={<WalletsPage />} />
          <Route path="/wallcomp" element={<WalletComponent />} />
          <Route path="/addwall" element={<AddWallet />} />
          <Route path="/addtrans" element={<Transaction />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
