import DevSection from "@/app/dev/Dev";
import HomePage from "@/app/page";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/dev" element={<DevSection/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
