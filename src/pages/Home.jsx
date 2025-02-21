import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// Component for the home page, this is the main page of the application that the user first visits
const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handles what the user can see, if the user is logged in or not
  const handleGetStarted = () => {
    if (user) {
      navigate("/~tmlarson/CSCI354/Project7/gpus");
    } else {
      navigate("/~tmlarson/CSCI354/Project7/login");
    }
  };

  return (
    <div className="index-body">
      <div className="background">
        <div className="index-header" role="main" aria-live="polite">
          <h2>Welcome to GPU⬩4⬩U</h2>
          <p>Wanting to find the best GPU for you? Get started now!</p>
          <button onClick={handleGetStarted} className="button">
            {user ? "Get Started" : "Login⬩Signup"}
          </button>
        </div>
        <div className="index-image">
          <img
            src="img/pngtree-graphics-card-vector-png-image_6705735.png"
            alt="Graphics card"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
