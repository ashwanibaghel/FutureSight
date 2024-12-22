import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './ProfilePage.css';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(firestore, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="profile">
      {user ? (
        <>
          <h1>{user.name}'s Profile</h1>
          <p>Email: {user.email}</p>
          <p>Achievements: {user.achievements}</p>
          <p>Progress: {user.progress}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProfilePage;
