import React from "react";
import Allarticles from "../../component/Allarticles/Allarticles";
import CategaryArticles from "../../component/categoriesArticle/CategaryArticles";
import FooterNumber from "../../component/footerNumber/FooterNumber";
import HeadingAllArticles from "../../component/headingAllArticles/HeadingAllArticles";
import LatestArticles from "../../component/latestArticles/LatestArticles";
import Searchbar from "../../component/searchbar/Searchbar";
import Sponser from "../../component/sponer/Sponser";

const Blogpage = () => {
  return (
    <div>
      <Searchbar/>
      <HeadingAllArticles/>
      <LatestArticles />
      <Allarticles/>
      <Sponser />
      <CategaryArticles />
      <Sponser />
      <FooterNumber/>
    </div>
  );
};

export default Blogpage;
