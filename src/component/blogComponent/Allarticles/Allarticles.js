import React from "react";

import "./allarticles.css";
import "../latestArticles/latestarticles.css"
// import shareIcon from "../../images/shareIcon.png";
import Card from "./card/Card";

const Allarticles = () => {
  return (
    <div className="all_article_container">
      <div className="LatestArticles_heading_main_div" >
        <div>
          <h1 className="latest_article_heading">All Articles</h1>
        </div>
        <div className="LatestArticles_line_div"></div>
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

export default Allarticles;
