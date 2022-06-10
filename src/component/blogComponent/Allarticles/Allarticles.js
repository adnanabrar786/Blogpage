import React from "react";

import "./allarticles.css";
import "../latestArticles/latestarticles.css"
// import shareIcon from "../../images/shareIcon.png";
import Card from "./card/Card";

const Allarticles = () => {
  return (
    <div className="all_article_container">
      <div className="AlltArticles_heading_main_div" >
        <div>
          <h1 className="AllArticle_heading">All Articles</h1>
        </div>
        <div className="AllArticles_line_div_"></div>
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
