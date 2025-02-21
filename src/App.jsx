import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GPUs from "./pages/GPUs";
import Overclocking from "./pages/Overclocking";
import History from "./pages/History";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

// Made it so the paths are correctly set up for the turing server so that when a user changes the page, the URL is correct
const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/~tmlarson/CSCI354/Project7/" element={<Home />} />
      <Route path="/~tmlarson/CSCI354/Project7/gpus" element={<GPUs />} />
      <Route
        path="/~tmlarson/CSCI354/Project7/overclocking"
        element={<Overclocking />}
      />
      <Route path="/~tmlarson/CSCI354/Project7/history" element={<History />} />
      <Route path="/~tmlarson/CSCI354/Project7/login" element={<Login />} />
      <Route path="/~tmlarson/CSCI354/Project7/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
