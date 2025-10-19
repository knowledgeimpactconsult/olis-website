// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
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
        `${isActive ? activeLink : inactiveLink} inline-flex items-center gap-1`
      }
    >
      {label} ▾
    </NavLink>
    <ul
      className="absolute left-0 top-full mt-2 w-56 bg-white text-orange-600 rounded-xl shadow-lg 
                 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 
                 invisible group-hover:visible transition-all duration-300 ease-out origin-top z-[9999]"
    >
      {items.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-orange-100 font-semibold text-orange-700"
                  : "hover:bg-orange-50"
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
  const [scrolled, setScrolled] = useState(false);

  // ✅ Close navbar on link click
  const handleNavClick = () => setIsOpen(false);

  // ✅ Detect scroll and apply blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-orange-500/90 backdrop-blur-md shadow-md"
          : "bg-orange-500 shadow-lg"
      } text-white`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo + Title */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="OLIS Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl lg:text-2xl font-bold tracking-wide">
            OLIS
          </span>
        </NavLink>

        {/* ✅ Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none transition-transform duration-300"
        >
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* ✅ Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium">
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

          {/* ✅ CTA */}
          <li>
            <NavLink
              to="/admission"
              className="ml-2 bg-yellow-400 text-orange-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
            >
              Apply Now
            </NavLink>
          </li>
        </ul>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`lg:hidden bg-orange-600 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-3 space-y-2 font-medium">
          {navItems.map((item) =>
            item.dropdown ? (
              <details key={item.label} className="group">
                <summary className="cursor-pointer py-2 hover:text-yellow-200">
                  {item.label}
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  {item.dropdown.map((sub) => (
                    <li key={sub.to}>
                      <NavLink
                        to={sub.to}
                        onClick={handleNavClick}
                        className={({ isActive }) =>
                          isActive
                            ? "text-yellow-300 font-semibold"
                            : "hover:text-yellow-200"
                        }
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    isActive ? activeLink : inactiveLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}

          {/* ✅ Mobile CTA */}
          <li>
            <NavLink
              to="/admission"
              onClick={handleNavClick}
              className="block bg-yellow-400 text-orange-900 text-center px-4 py-2 mt-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition"
            >
              Apply Now
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
