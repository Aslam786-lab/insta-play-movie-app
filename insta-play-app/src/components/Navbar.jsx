import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SearchIcon } from "./icons/icons";
import logo from "../assets/website-logo.svg";
import { useAuth } from "../context/AuthContext";
import { useSearch } from "../context/SearchContext";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { searchText, setSearchText, removeSearchText } = useSearch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomePage = pathname === "/movies";

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleLogout = () => {
    logout();
    removeSearchText();
  };

  const handleLogo = () => {
    if (isAuthenticated) {
      navigate("/movies");
    }
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="website-logo"
        className="website-logo"
        onClick={handleLogo}
      />

      {isAuthenticated && isHomePage && (
        <div className="protected-nav">
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search movies"
              className="search-movie"
              value={searchText}
              onChange={handleChange}
            />
            <SearchIcon />
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
