import React, { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="flex justify-between p-5 border-b items-center flex-wrap dark:border-gray-700">
      <div className="logo">
        <Link to="/">Dopagraming</Link>
      </div>
      <Search />
      <div>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="bg-gray-100 py-1 px-2 rounded shadow-md dark:text-white-100 dark:bg-gray-800 dark:shadow-md"
        >
          {darkTheme ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
