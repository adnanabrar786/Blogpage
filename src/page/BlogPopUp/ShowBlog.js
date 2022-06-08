import React from "react";
import "./showblog.css";
import Sponser from "../../component/sponer/Sponser";
import RelatedArticles from "../../component/showBlogComponent/realatedArticle/RelatedArticles";
import BlogShowUpperWork from "../../component/showBlogComponent/BlogShowUpperWork/BlogShowUpperWork";

const ShowBlog = () => {
  return (
    <div>
      <BlogShowUpperWork />
      <RelatedArticles />
      <Sponser />
    </div>
  );
};

export default ShowBlog;
