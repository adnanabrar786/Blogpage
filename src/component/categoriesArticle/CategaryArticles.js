import React, { useState, useEffect } from "react";
import "./catergoriesArticles.css";
import imageOne from "./images/imageOne.png";
import shareIcon from "../../images/shareIcon.png";
import CategoryCard from "./categoryCard/CategoryCard";

const CategaryArticles = () => {
  const [categoryData, setCategoryData] = useState([]);

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

          {/* <div className="categoriesArticle_main_div">
        <img src={imageOne} alt="imageOne" className="categoriesArticl_image" />
        <div className="categoriesArticle_button_div">
          <button className="categoriesArticle_button">category</button>
        </div>

        <p className="category_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing.{" "}
        </p>
        <div className="Effeeiko_main_div">
          <p className="effiko_name">Effiko</p>
          <p>12 May 2022 12:18 AM</p>
          <div className="icon_div">
            <img
              src={shareIcon}
              alt="shareIcon"
              className="category_icon_img"
            />
            <p className="category_icon_name">share</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CategaryArticles;


