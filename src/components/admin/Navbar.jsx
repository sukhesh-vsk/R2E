import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const isActive = (route) => {
    return location.pathname === route ? "font-bold" : "";
  };

  return (
    <nav className="flex w-full justify-around items-center py-10">
      <div className="text-xl font-bold tracking-2">
        <a>
          <p>RtoE</p>
        </a>
      </div>
      <div className="flex">
        <ul className="flex list-none">
          <li className="px-5">
            <NavLink to="/" className={isActive("/")}>
              Dashboard
            </NavLink>
          </li>
          <li className="px-5">
            <NavLink to="/recharge" className={isActive("/recharge")}>
              Recharge
            </NavLink>
          </li>
          <li className="px-5">
            <NavLink to="/plans" className={isActive("/plans")}>
              Add Plans
            </NavLink>
          </li>
          <li className="px-5">
            <NavLink to="/offers" className={isActive("/offers")}>
              Manage Offers
            </NavLink>
          </li>
          <li className="px-5">
            <NavLink to="/query" className={isActive("/query")}>
              Queries
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="list-none relative">
            <button
              id="dropdownNavbarLink"
              onClick={() => setHidden(!hidden)}
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 px-3 rounded md:border-0 md:p-0 md:w-auto bg-transparent text-primary"
            >
              Hi Admin{" "}
              <svg
                className={`w-2.5 h-2.5 ms-2.5 ${hidden ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {hidden && (
              <div
                id="dropdownNavbar"
                className="z-10 mt-2 absolute w-full list-none font-normal rounded-lg dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  ariaLabelledby="dropdownLargeButton"
                >
                  <li className="list-none text-center">
                    <a
                      href="#"
                      className="block px-4 py-1 dark:hover:text-white"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};