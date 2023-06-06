import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';
import WalletsPage from './components/pages/WalletsPage';
import Transaction from './components/Layout/Transaction';
import TransactionPage from './components/pages/TransactionsPage';
import WalletCard from './components/Layout/WalletCard';
import HistoryCard from './components/Layout/HistoryCard';
import AddWallet from './components/Layout/AddWallet';
import './App.css';

function App() {
  return (
    <>

    {/* TODO these routes are just for testing purpose, delete the routes after done. */}
      <Router>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/trans' element={<Transaction />} />
          <Route path='/transaction' element={<TransactionPage />} />
          <Route path='/card' element={<WalletCard />} />
          <Route path='/history' element={<HistoryCard />} />
          <Route path='/wallets' element={<WalletsPage />} />
          <Route path='/add' element={<AddWallet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
