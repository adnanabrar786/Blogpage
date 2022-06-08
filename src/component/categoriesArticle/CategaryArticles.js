import React from "react";
import "./catergoriesArticles.css";

import CategoryCard from "./categoryCard/CategoryCard";

const CategaryArticles = () => {

  return (
    <div className="categoriesArticle_container">
      
      <div>
        <CategoryCard />
      </div>

      {/* image two */}

      <div>
        <CategoryCard />
      </div>
  

      {/* image three */}
      <div>
        <CategoryCard />
      </div>

    
    </div>
  );
};

export default CategaryArticles;


