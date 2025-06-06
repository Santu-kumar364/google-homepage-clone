import React from "react";
import "../css/SearchBar.css";

import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <SearchIcon className="icon" />
        <input type="text" placeholder="Search Google or type a URL" />
        <MicIcon className="icon" />
        <CenterFocusWeakIcon className="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
