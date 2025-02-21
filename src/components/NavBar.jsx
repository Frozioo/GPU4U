import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Component for the navigation bar
const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Function that logs out the user and redirects to the login page
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful");
      navigate("/~tmlarson/CSCI354/Project7/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Allows the user to navigate through the different pages of the application, depending on if they are logged in or not
  return (
    <nav role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        <h1>GPU⬩4⬩U</h1>
        <ul role="menubar">
          <li>
            <Link to="/~tmlarson/CSCI354/Project7/" role="menuitem">
              Home
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/~tmlarson/CSCI354/Project7/gpus" role="menuitem">
                  GPUs
                </Link>
              </li>
              <li>
                <Link
                  to="/~tmlarson/CSCI354/Project7/overclocking"
                  role="menuitem"
                >
                  Overclocking
                </Link>
              </li>
              <li>
                <Link to="/~tmlarson/CSCI354/Project7/history" role="menuitem">
                  History
                </Link>
              </li>
              <li>
                <Link to="/~tmlarson/CSCI354/Project7/profile" role="menuitem">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/~tmlarson/CSCI354/Project7/"
                  onClick={handleLogout}
                  role="menuitem"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link to="/~tmlarson/CSCI354/Project7/login" role="menuitem">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
