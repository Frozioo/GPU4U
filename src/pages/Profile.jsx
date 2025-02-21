import React, { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Profile = () => {
  const [email, setEmail] = useState("");

  // Function that allows the user to reset their password using their email, works with Firebase
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="index-body">
      <div className="background">
        <div className="form-container2">
          <h2>Change Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button id="reset-password-button" onClick={handlePasswordReset}>
            Send Password Reset Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
