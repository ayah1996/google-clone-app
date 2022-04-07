import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-xl text-blue-500 font-bold ">Goggle</p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:text-gray-900 px-2 py-l "
        >
          {darkTheme ? " 💡 " : " 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
