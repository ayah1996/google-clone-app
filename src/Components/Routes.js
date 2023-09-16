import React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routes = () => {
  return (
    <div className="p-4">
      <Router>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
      </Router>
    </div>
  );
};

export default Routes;
