import React from "react";
import shareIcon from "../../../../images/shareIcon.png";
import "../../../showBlogComponent/realatedArticle/relatedarticles.css";

const RelatedScholarShipCard = () => {
  return (
    <div>
      <div>
        {/* allArtricles_conatiner_righttWork  start */}

        <div className="related_card_conatiner">
          <div>
            <button 
            // className="relatedArticle_category_button" 
            id="schoilarShip_category_button">Category</button>

            {/* category paragraph start */}

            <div className="relatedArticle_paragraph_div">
              <h4 className="relatedArticle_paragraph_div_heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h4>
              <p className="relatedArticle_paragraph_div_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt tellus varius.
              </p>
            </div>

            {/* category paragraph end */}
          </div>
        </div>

        {/* allArtricles_conatiner_righttWork  end */}

        {/* category plast line start */}


          <div
            className="relatedArticle_paragraph_div_last_line"
            id="scholarship_paragraph_div_last_line"
          >
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
     

        {/* category plast line end */}
      </div>
    </div>
  );
};

export default RelatedScholarShipCard;
