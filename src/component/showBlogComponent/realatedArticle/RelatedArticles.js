import React from "react";
import RelateArticledcard from "./realtedarticeCrad/RelateArticledcard";

const RelatedArticles = () => {
  return (
    <div className="relatedArticles_container">
      {/* realted heading */}
      
      <div className="related_heading_main_div">
        <div>
          <h1 className="related_article_heading">Related Articles</h1>
        </div>
        <div className="related_line_div"></div>
      </div>

      {/* realtead card */}
      <div className="RelateArticledcard_component_container">
        <div>
          <RelateArticledcard />
        </div>
        <div>
          <RelateArticledcard />
        </div>
        <div>
          <RelateArticledcard />
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
