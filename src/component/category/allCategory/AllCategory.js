import React from "react";
import LatestArticles from "../../blogComponent/latestArticles/LatestArticles";
import Allarticles from "../../blogComponent/Allarticles/Allarticles";
import Sponser from "../../sponser/Sponser";
import CategaryArticles from "../../blogComponent/categoriesArticle/CategaryArticles";
import FooterNumber from "../../blogComponent/footerNumber/FooterNumber";

const AllCategory = () => {
  return (
    <div>
      <LatestArticles />
      <Allarticles />
      <Sponser />
      <CategaryArticles />
      <Sponser />
      <FooterNumber />
    </div>
  );
};

export default AllCategory;
