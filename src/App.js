import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component

import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unSubscribeAuth();
  }, []);

  if (loading) {
    return <div className='font-bold text-center text-5xl'>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route
          path="/home"
          element={
            <PrivateRoute user={user}>
              <Home user={user} setUser={setUser} />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
