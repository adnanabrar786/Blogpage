import React from "react";
// import axios from "axios";

import "./allarticles.css";
// import shareIcon from "../../images/shareIcon.png";
import Card from "./card/Card";

const Allarticles = () => {
  return (
    <div  className="all_article_container">
        <h1 className="AllArticle_heading">All Articles</h1>
      

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
