import React from "react";
import "./searchbar.css";
import searchIcon from "../searchbar/images/searchIcon.png";

const Searchbar = () => {
  return (
    <div className="searchbar_container">
      <div className="searchbar_div">
          <div className="searchbar_paragraph"> <img src={searchIcon} alt="shareIcon" className="search_icon" /></div>
        <input type="search" id="gsearch" name="gsearch" className="search_input"></input>
      </div>
    </div>
  );
};

export default Searchbar;
