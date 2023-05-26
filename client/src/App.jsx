import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';
import WalletsPage from './components/pages/WalletsPage';
import Transaction from './components/Layout/Transaction';
import WalletCard from './components/Layout/WalletCard';
import HistoryCard from './components/Layout/HistoryCard';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/trans' element={<Transaction />} />
          <Route path='/card' element={<WalletCard />} />
          <Route path='/history' element={<HistoryCard />} />
          <Route path='/wallets' element={<WalletsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
