import React from "react";
import Allarticles from "../../component/blogComponent/Allarticles/Allarticles";
import CategaryArticles from "../../component/blogComponent/categoriesArticle/CategaryArticles";
import FooterNumber from "../../component/blogComponent/footerNumber/FooterNumber";
import HeadingAllArticles from "../../component/blogComponent/headingAllArticles/HeadingAllArticles";
import LatestArticles from "../../component/blogComponent/latestArticles/LatestArticles";
import Searchbar from "../../component/blogComponent/searchbar/Searchbar";
import Sponser from "../../component/sponser/Sponser";

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
