import './App.css';
import React, { useState } from 'react';

import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Layout from './components/dashboard/layout';
import Details from './components/dashboard/details';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Layout><Details/></Layout>
  }

  return (
    <>
      {showLoginForm ? (
        <Login 
          onClickSignUp={() => setShowLoginForm(false)}
          onShowDashboard={() => setShowDashboard(true)}
        /> 
        ): (
        <SignUp 
          onClickLogin={() => setShowLoginForm(true)}
          onShowDashboard={() => setShowDashboard(true)}
        /> 
      )}
     </>
    );
}

export default App;
