import React, { useState, useEffect } from "react";
import shareIcon from "../../../../images/shareIcon.png";
import "../relatedarticles.css";

import axios from "axios";
const RelateArticledcard = () => {
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
      <div>
        {/* allArtricles_conatiner_righttWork  start */}

        <div className="related_card_conatiner">


          <div>
            <button className="relatedArticle_category_button">Category</button>

            {/* category paragraph start */}

            <div className="relatedArticle_paragraph_div">
              <h4 className="relatedArticle_paragraph_div_heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h4>
              <p className="relatedArticle_paragraph_div_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt tellus varius.
              </p>

              <div className="relatedArticle_paragraph_div_last_line">
                <p className="relatedArticle_last_line_name">Effiko</p>
                <p className="relatedArticle_last_line_date">
                  12 May 2022 12:18 AM
                </p>
                <div className="relatedArticle_last_line_icon_div">
                  <img
                    src={shareIcon}
                    alt="Icon"
                    className="relatedArticle_last_line_icon"
                  />
                  <p className="relatedArticle_last_line_icon_share">Share</p>
                </div>
              </div>
              
            </div>

            {/* category paragraph end */}
          </div>
        </div>

        {/* allArtricles_conatiner_righttWork  end */}
      </div>
    </div>
  );
};

export default RelateArticledcard;
