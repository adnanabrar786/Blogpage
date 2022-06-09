import React from "react";
import FooterNumber from "../../component/blogComponent/footerNumber/FooterNumber";
import ScholarCategaryArticles from "../../component/scholarshipComponent/categoriesArticle/ScholarCategaryArticles";
import ScholarlatestArticles from  "../../component/scholarshipComponent/ScholarlatestArticles/ScholarlatestArticles"
import ScholarshipAllarticles from "../../component/scholarshipComponent/ScholarshipAllarticles/ScholarshipAllpost";
import ScholarShipSearchbar from "../../component/scholarshipComponent/ScholarShipSearchbar/ScholarShipSearchbar";

import Sponser from "../../component/sponser/Sponser"

const scholarShip = () => {
  return (
    <div>

      <ScholarShipSearchbar/>
      <ScholarlatestArticles/>
      <ScholarshipAllarticles/>
      <Sponser/>
      <ScholarCategaryArticles/>
      <Sponser/>
      <FooterNumber/>
       

    </div>
  );
};

export default scholarShip;
