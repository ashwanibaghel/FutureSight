import React, { useState } from 'react';
import axios from 'axios';
import './PredictCareer.css';

function PredictCareer() {
  const [skills, setSkills] = useState('');
  const [preferences, setPreferences] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handlePredict = () => {
    if (!skills || !preferences) {
      setError("Please enter both skills and preferences.");
      return;
    }
    axios.post('http://localhost:5000/predict', { skills, preferences })
      .then(response => {
        setResult(response.data.careerPath);
        setError('');
      })
      .catch(() => setError('Failed to get career prediction.'));
  };

  return (
    <div className="predict-career">
      <h1>AI Career Prediction</h1>
      <input
        type="text"
        placeholder="Enter your skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your preferences"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      />
      <button onClick={handlePredict}>Predict Career</button>
      {result && <p>Suggested Career Path: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default PredictCareer;
