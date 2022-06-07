import React, { useState, useEffect } from "react";
import "../catergoriesArticles.css";
import axios from "axios";
import shareIcon from "../../../images/shareIcon.png";
import imageOne from "../images/imageOne.png";

const CategoryCard = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {category.map((val, index) => {
        return (
          <div className="categoriesArticle_main_div" key={index}>
            <img
              src={imageOne}
              alt="imageOne"
              className="categoriesArticl_image"
            />
            <div className="categoriesArticle_button_div">
              <button className="categoriesArticle_button">Category</button>
            </div>

            <p className="category_paragraph">{val.name}</p>
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
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
