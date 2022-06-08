import React, { useState, useEffect } from "react";
import "./latestarticles.css";
import shareIcon from "../../images/shareIcon.png";
import Rightwork from "./latestRightWork/Rightwork";
import axios from "axios";

const LatestArticles = () => {
  const [latestArticle, setlatestArticle] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        setlatestArticle(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="LatestArticles_container">
      <div className="LatestArticles_heading_main_div">
        <div><h1 className="latest_article_heading">Latest Articles</h1></div>
        <div className="LatestArticles_line_div"></div>
      </div>

      {latestArticle.map((val, index) => {

       const name = val.name;
       const email = val.email ;
        return (
          <div className="LatestArticles_sub_container" key={index}>
            {/* left imeage work */}
            <div className="left_image_div">
              <div className="category_button_div">
                <button className="category_button_">Category</button>
              </div>

              <div className="pargraph_category">
                <p className="pargraph_category_heading">
                  {val.name}
                </p>
                <p className="pargraph_category_paragraph">
                {val.name}
                </p>
                <div className="lastline_category">
                  <p className="effiko_name">Effiko</p>
                  <p className="lastline_category_date">12 May 2022 12:18 AM</p>
                  <div className="icon_div">
                    <img
                      src={shareIcon}
                      className="category_share_icon"
                      alt="share"
                    />
                    <p className="share_name">Share</p>
                  </div>
                </div>
              </div>
            </div>

            {/* right imeage work  start*/}
            <div>
              <Rightwork  email={email}  name ={name}/>
            </div>
            {/* right imeage work  end*/}
          </div>
        );
      })}
    </div>
  );
};

export default LatestArticles;
