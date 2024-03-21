import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/App.tsx";
import Login from "../../Pages/LoginPage/App.tsx";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};