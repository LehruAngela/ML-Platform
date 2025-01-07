import './App.css';
import React, { useState } from 'react';

import Login from './components/auth/login';
import SignUp from './components/auth/signup';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <>
     {showLoginForm ? <Login onClickSignUp={() => setShowLoginForm(false)} /> : <SignUp onClickLogin={() => setShowLoginForm(true)}/> }
     </>
    );
}

export default App;
