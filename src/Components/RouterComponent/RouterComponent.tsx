import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/App.tsx";
import Login from "../LoginPage/App.tsx";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};