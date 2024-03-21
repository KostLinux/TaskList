import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/App.tsx";
import Login from "../../Pages/LoginPage/Login.tsx";
import About from "../../Pages/About/About.tsx";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};