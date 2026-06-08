import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/listing", label: "Listings" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const goAuth = () => {
    navigate("/auth");
    setLogin(true);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: logo + desktop links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex shrink-0 items-center" aria-label="HamroRent home">
            <img src={logo || "/placeholder.svg"} alt="HamroRent" className="h-8 w-auto object-contain" />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/post" className="btn btn-accent hidden sm:inline-flex">
            <i className="ri-add-line text-base" aria-hidden="true"></i>
            Post Property
          </Link>

          {login ? (
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
              aria-label="Account"
            >
              <i className="ri-user-line" aria-hidden="true"></i>
            </button>
          ) : (
            <button onClick={goAuth} className="btn btn-primary hidden sm:inline-flex">
              Log in
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`} aria-hidden="true"></i>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
            <Link to="/post" onClick={() => setMenuOpen(false)} className="btn btn-accent w-full">
              <i className="ri-add-line text-base" aria-hidden="true"></i>
              Post Property
            </Link>
            {!login && (
              <button onClick={goAuth} className="btn btn-primary w-full">
                Log in
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
