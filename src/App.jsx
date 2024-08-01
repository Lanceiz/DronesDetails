import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DroneList from './components/DroneList';
import DroneDetails from './components/DroneDetails';
import data from './data.json';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    const user = data.users.find(
      (u) => u.username === username && u.password === password
    );
    setIsAuthenticated(!!user);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/drones" replace /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/drones" element={
            isAuthenticated ? <DroneList drones={data.drones} /> : <Navigate to="/" replace />
          } />
          <Route path="/drones/:id" element={
            isAuthenticated ? <DroneDetails drones={data.drones} /> : <Navigate to="/" replace />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
