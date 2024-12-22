import React from 'react';
import './AchievementsPage.css';

function AchievementsPage() {
  const achievements = [
    { title: "100-Day Streak", description: "Consistency is key!" },
    { title: "Top Skills", description: "Mastered JavaScript & React.js" },
  ];

  return (
    <div className="achievements-container">
      <h1>Your Achievements</h1>
      <ul>
        {achievements.map((ach, index) => (
          <li key={index}>
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AchievementsPage;
