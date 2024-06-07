import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath");
    if (lastPath) {
      navigate(lastPath);
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("lastPath", location.pathname);
  }, [location]);
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
