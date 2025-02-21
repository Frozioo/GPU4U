import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Allows the user to login with an existing account in Firebase, once the user logs in, it will redirect them to the home page.
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      alert("Login successful");
      navigate("/~tmlarson/CSCI354/Project7/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Function that lets the user sign up using firebase, it will keep the user on the same page
  // This one was causing a bug, fixed it so that the user is signed out after signing up
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      await signOut(auth);
      alert("Signup successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="index-body">
      <div className="background">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <br />
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <label htmlFor="signup-email">Email:</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
            <label htmlFor="signup-password">Password:</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
