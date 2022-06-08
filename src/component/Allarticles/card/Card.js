import React, { useState, useEffect } from "react";
import "../allarticles.css";
import shareIcon from "../../../images/shareIcon.png";
import axios from "axios";

const Card = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* allArtricles_conatiner_righttWork  start */}

      {data.map((val, index) => {
        return (
          <div className="allArtricles_Sub_conatiner_one" key={index}>
            <div>
              <button className="category_button">Category</button>

              {/* category paragraph start */}

              <div className="category_paragraph_div">
                <h4 className="category_paragraph_div_heading">
                  {val.name}
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing. */}
                </h4>
                <p className="category_paragraph_div_paragraph">
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            tellus varius. */}
                  {val.email}
                </p>
                <div className="category_paragraph_div_last_line">
                  <p className="last_line_name">Effiko</p>
                  <p className="last_line_date">12 May 2022 12:18 AM</p>
                  <div className="last_line_icon_div">
                    <img
                      src={shareIcon}
                      alt="Icon"
                      className="last_line_icon"
                    />
                    <p className="last_line_icon_share">Share</p>
                  </div>
                </div>
              </div>

              {/* category paragraph end */}
            </div>
          </div>
        );
      })}

      {/* allArtricles_conatiner_righttWork  end */}
    </div>
  );
};

export default Card;
