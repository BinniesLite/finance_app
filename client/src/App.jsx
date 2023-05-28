import { useState } from 'react'
import SignUpPage  from './components/pages/SignUpPage'
import SignInPage  from './components/pages/SignInPage'
import WalletsPage  from './components/pages/WalletsPage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Transaction from './components/Layout/Transaction';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
      {/* <WalletsPage/> */}
      {/* <Transaction/> */}
    </>
  )
}

export default App
