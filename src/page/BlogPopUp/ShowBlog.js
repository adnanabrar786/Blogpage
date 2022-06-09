import React from "react";
import Sponser from "../../component/sponser/Sponser";
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
