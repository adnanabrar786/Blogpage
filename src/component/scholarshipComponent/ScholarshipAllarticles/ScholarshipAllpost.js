import React from "react";
import "../../blogComponent/Allarticles/allarticles.css"
// import shareIcon from "../../images/shareIcon.png";
import Card from "./ScholarShipcard/ScholarShipcard";
import "./ScholarshipAllpost.css"

const ScholarshipAllpost = () => {
  return (
    <div className="all_article_container">
      <div className="LatestArticles_heading_main_div" >
        <div>
          <h1 className="latest_article_heading">Scholarship post’s</h1>
        </div>
        <div className="LatestArticles_line_div" id="LatestArticles_line_width" ></div>
      </div>

      <div className="allArtricles_card_conatiner">
        <div>
          <Card />
        </div>

        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ScholarshipAllpost;
