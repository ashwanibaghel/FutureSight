import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProfilePage from './components/ProfilePage';
import Dashboard from './components/Dashboard';
import PredictCareer from './components/PredictCareer';
import AchievementsPage from './components/AchievementsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/predict" element={<PredictCareer />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

