import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/Home';
import Users from './pages/Users';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';
import AddTaskPage from './components/task/AddTask';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        
        {/* PRIVATE ROUTES AFTER LOGIN */}
        <Route path="/" element={<Home />}/>
        <Route path='/users' element={<Users />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/addtask' element={<AddTaskPage/>}/>
        <Route path="*" element={<NotFound />}/>

        {/* ADMIN ROUTES */}

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
