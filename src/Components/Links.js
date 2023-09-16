import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔍 All" },
  { url: "/image", text: "📷 Images" },
];

const Links = () => {
  return (
    <div className="flex justify-between sm:justify-around  items-center mt-4">
      {links.map(({ url, text }, index) => (
        <span key={index} className="m-2">
          <NavLink
            to={url}
            key={index}
            className={(navData) =>
              navData.isActive
                ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                : "none"
            }
          >
            {text}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default Links;
