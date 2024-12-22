import React, { useState } from "react";
// import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user.uid);

      const userRef = doc(firestore, 'users', userCredential.user.uid);
            await setDoc(userRef, {
              name: displayName,
              email: email,
              achievements: 'No achievements yet',
              progress: 0,
            });

      navigate("/Dashboard"); // Navigate to Dashboard after login
    } catch (err) {
      setError(err.message);
    }
  };

  const currentUserId = auth.currentUser ? auth.currentUser.uid : null;

if (currentUserId) {
  console.log("Logged in User UID:", currentUserId);
} else {
  console.log("No user logged in");
}

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/Signup")}>Sign Up Here</button>
      </p>
    </div>
  );
};

export default Login;
