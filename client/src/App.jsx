import { useState } from 'react'
import SignUpPage  from './components/pages/SignUpPage'
import SignInPage  from './components/pages/SignInPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import "node_modules/react-icons";

function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
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
