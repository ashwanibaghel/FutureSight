import React, { useState } from "react";
// import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user.uid);

      const userRef = doc(firestore, 'users', userCredential.user.uid);
      await setDoc(userRef, {
        name: displayName,
        email: email,
        achievements: 'No achievements yet',
        progress: 0,
      });

      navigate("/Dashboard"); // Navigate to Dashboard after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input 
        type="text" 
        placeholder="Display Name" 
        value={displayName} 
        onChange={(e) => setDisplayName(e.target.value)} 
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Login Here</button>
      </p>
    </div>
  );
};

export default Signup;
