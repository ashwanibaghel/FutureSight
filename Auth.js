import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);

  const handleAuth = async () => {
    try {
      if (isNewUser) {
        // Sign-Up User
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("New User UID:", userCredential.user.uid);
      } else {
        // Login User
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Existing User UID:", userCredential.user.uid);
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };

  return (
    <div>
      <h2>{isNewUser ? "Sign Up" : "Login"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isNewUser ? "Sign Up" : "Login"}</button>
      <button onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? "Switch to Login" : "Switch to Sign Up"}
      </button>
    </div>
  );
};

export default Auth;
