import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rrsults from "./components/Results";
import { Routes, Route, redirect } from "react-router-dom";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen dark:bg-white-100 dark:text-white-100">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Rrsults />
        <Routes>
          <Route path="/news" element={<Rrsults />} />
          <Route path="/images" element={<Rrsults />} />
          <Route path="/vidoes" element={<Rrsults />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};
export default App;
