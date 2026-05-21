import React from "react";
import Landing from "./Pages/Landing";
import { Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
