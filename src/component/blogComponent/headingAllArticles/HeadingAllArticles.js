import React from "react";
import "./headingallarticles.css";

const HeadingAllArticles = () => {
  return (
    <div className="HeadingAllArticles_container">
      <div className="heading_main_div">
        <div className="Category_heading">All</div>
        <div className="Category_heading">
          Category 1 <sup className="power">100</sup>
        </div>
        <div className="Category_heading">
          Category 2 <sup className="power">100</sup>
        </div>
        <div className="Category_heading">
          Category 3 <sup className="power">100</sup>
        </div>
        <div className="Category_heading">
          Category 4 <sup className="power">100</sup>
        </div>
      </div>
     
    </div>
  );
};

export default HeadingAllArticles;
