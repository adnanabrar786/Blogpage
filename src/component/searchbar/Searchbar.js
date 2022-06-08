import React from "react";
import "./searchbar.css";
import searchIcon from "../searchbar/images/searchIcon.png";

const Searchbar = () => {
  return (
    <div className="searchbar_container">
    <div className="searchbar_bg_container">
      <div className="searchbar_div">
          <div className="searchbar_bg_imgage"> <img src={searchIcon} alt="shareIcon" className="search_icon" /></div>
        <input type="search" id="gsearch" name="gsearch" className="search_input"></input>
      </div>
    </div>
    {/* in below div two classe apply one for size one for styling own element */}
    <div className="searchbar_para_container">
        <p className="searchbar_date searchbar_para_size ">May 15 2022</p>
        <h1 className="searchbar_heading searchbar_para_size">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        <p className="searchbar_paragraph searchbar_para_size">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet amet consectetur id malesuada interdum. 
             Egestas commodo eu sapien lobortis.
           Habitasse imperdiet ipsum adipiscing feugiat. Pretium aliquet massa augue cras.</p>
        <button className="searchbar_button searchbar_para_size">Raed More</button>
    </div>
    </div>
  );
};

export default Searchbar;
