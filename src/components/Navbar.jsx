// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// ✅ Config-driven navigation
const navItems = [
  { label: "HOME", to: "/" },
  { label: "ADMISSION", to: "/admission" },
  { label: "ACADEMICS", to: "/academics" },
  {
    label: "STUDENT LIFE",
    to: "/student-life",
    dropdown: [
      { label: "HOUSES", to: "/houses" },
      { label: "CLUBS", to: "/clubs" },
      { label: "SPORTS & CULTURE", to: "/sports-culture" },
      { label: "EXCURSIONS", to: "/excursions" },
    ],
  },
  { label: "EVENTS", to: "/events" },
  { label: "GALLERY", to: "/gallery" },
  { label: "ABOUT US", to: "/about" },
  { label: "CONTACT US", to: "/contact" },
];

const activeLink =
  "text-yellow-300 border-b-2 border-yellow-300 pb-1 transition-all duration-300";
const inactiveLink = "hover:text-yellow-200 pb-1 transition-all duration-300";

const Dropdown = ({ label, to, items }) => (
  <li className="relative group">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? activeLink : inactiveLink} inline-flex items-center`
      }
    >
      {label} ▾
    </NavLink>
    <ul
      className="absolute left-0 top-full w-56 bg-white text-orange-600 rounded shadow-lg 
                 opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                 transition z-[9999]"
    >
      {items.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive
                  ? "bg-orange-100 font-semibold text-orange-700"
                  : "hover:bg-orange-100"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white shadow-md fixed w-full z-[1000]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="OLIS Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-2xl font-bold hidden sm:inline">OLIS</span>
        </NavLink>

        {/* ✅ Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-6 bg-white transform transition ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* ✅ Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) =>
            item.dropdown ? (
              <Dropdown
                key={item.label}
                label={item.label}
                to={item.to}
                items={item.dropdown}
              />
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? activeLink : inactiveLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}

          {/* CTA button inside nav */}
          <li>
            <NavLink
              to="/admission"
              className="bg-yellow-400 text-orange-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Apply Now
            </NavLink>
          </li>
        </ul>
      </div>

      {/* ✅ Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 px-4 py-3 space-y-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <details key={item.label}>
                <summary className="cursor-pointer py-2">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? activeLink : inactiveLink
                    }
                  >
                    {item.label}
                  </NavLink>
                </summary>
                <ul className="pl-4">
                  {item.dropdown.map((sub) => (
                    <li key={sub.to}>
                      <NavLink
                        to={sub.to}
                        className={({ isActive }) =>
                          isActive ? "text-yellow-300" : "hover:text-yellow-200"
                        }
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                {item.label}
              </NavLink>
            )
          )}

          {/* CTA button (mobile) */}
          <NavLink
            to="/admission"
            className="block bg-yellow-400 text-orange-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Apply Now
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
