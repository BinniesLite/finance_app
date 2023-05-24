import { useState } from 'react'
import SignUpPage  from './components/pages/SignUpPage'
import SignInPage  from './components/pages/SignInPage'
// import TransactionPage  from './components/pages/TransactionPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import TransactionPage from './components/pages/TransactionsPage';

function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Routes>
      </Router>
    </div>
    {/* <div> 
      <SignInPage/>
    </div> */}
    </>
  )
}

export default App
