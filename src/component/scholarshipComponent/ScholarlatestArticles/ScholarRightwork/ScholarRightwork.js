import React from "react";
import "../../../blogComponent/latestArticles/latestRightWork/righttwork.css";
import rightworkshareIcon from "../images/rightworkshareIcon.png";

const ScholarRightwork = ({name , email}) => {

  return (

 
    <div>
      <div className="Rightwork_container">
        <div className="Rightwork_button_div">
          <button id="button_blue">Category</button>
        </div>
        {/* pagraghp main div start */}
        <div className="Rightwork_paragraph_container">
          <p className="Rightwork_paragraph_heading">
            {name}
          </p>
          <p className="Rightwork_paragraph_paragraph">
           {email}
          </p>
          <div className="Rightwork_paragraph_last_line">
            <p className="Rightwork_name">Effiko</p>
            <p className="Rightwork_date">12 May 2022 12:18 AM</p>
            <div className="Rightwork_icon_div">
              <img src={rightworkshareIcon} alt="background img" className="Rightwork_icon_image" />
              <p className="Rightwork_share">Share</p>
            </div>
          </div>
        </div>
        {/* pagraghp main div end*/}
      </div>



      {/* two start */}
      <div className="Rightwork_container">
        <div className="Rightwork_button_div">
          <button className="Rightwork_button">Category</button>
        </div>
        {/* pagraghp main div start */}
        <div className="Rightwork_paragraph_container">
          <p className="Rightwork_paragraph_heading">
            {name}
          </p>
          <p className="Rightwork_paragraph_paragraph">
             {email}
          </p>
          <div className="Rightwork_paragraph_last_line">
            <p className="Rightwork_name">Effiko</p>
            <p className="Rightwork_date">12 May 2022 12:18 AM</p>
            <div className="Rightwork_icon_div">
              <img src={rightworkshareIcon} alt="background img" className="Rightwork_icon_image" />
              <p className="Rightwork_share">Share</p>
            </div>
          </div>
        </div>
        {/* pagraghp main div end*/}
      </div>
      {/* two end */}
    </div>
  );
};

export default ScholarRightwork;
