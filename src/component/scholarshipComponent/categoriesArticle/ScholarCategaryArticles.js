import React from "react";
import "../../blogComponent/categoriesArticle/catergoriesArticles.css";

import CategoryCard from "./ScholarcategoryCard/ScholarCategoryCard";

const ScholarCategaryArticles = () => {

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

export default ScholarCategaryArticles;


