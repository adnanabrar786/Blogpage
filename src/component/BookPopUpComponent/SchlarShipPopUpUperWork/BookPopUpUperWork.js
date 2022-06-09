import React from "react";
import shareIcon from "../../../images/shareIcon.png";
import shareWhiteIcon from "../image/shareWhiteIcon.png";
import "./SchlarShipPopUpUperWork.css"
import "../../showBlogComponent/BlogShowUpperWork/blogShowupperWork.css";

const BookPopUpUperWork = () => {
  return (
    <div className="BlogShowUpperWork_conatiner">
      <div className="BlogShowUpperWork_bg_image"></div>
       {/* share white icon  start*/}
       <div className="share_WhiteIcon_div">
          <img src={shareWhiteIcon} className="share_WhiteIcon_img"/>
        </div>
        {/* share white icon  end*/}
      <div className="BlogShowUpperWork_articles_container">
        <p className="BlogShowUpperWork_date">May 15 2022</p>
        <h1 className="BlogShowUpperWork_heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
        </h1>


        {/* feting article div  start*/}
        <div className="blog_fetching_main_div">
          {/* one */}
          <p className="blog_fetching_main_div_paragraph_margin">
            Have you ever read a webpage or document that used this text without
            paying much attention to it? The lorem ipsum is a placeholder text
            used in publishing and graphic design. This filler text is a short
            paragraph that contains all the letters of the alphabet. The
            characters are spread out evenly so that the reader’s attention is
            focused on the layout of the text instead of its content. Many
            software programs and applications have made it their default dummy
            text. Since the lorem ipsum is always used as a placeholder text,
            its use indicates that this is not a final version of a document,
            thus helping to avoid unnecessary printing.
          </p>

          {/* two */}
          <p className="blog_fetching_main_div_paragraph_margin">
            Have you ever read a webpage or document that used this text without
            paying much attention to it? The lorem ipsum is a placeholder text
            used in publishing and graphic design. This filler text is a short
            paragraph that contains all the letters of the alphabet. The
            characters are spread out evenly so that the reader’s attention is
            focused on the layout of the text instead of its content. Many
            software programs and applications have made it their default dummy
            text. Since the lorem ipsum is always used as a placeholder text,
            its use indicates that this is not a final version of a document,
            thus helping to avoid unnecessary printing.
          </p>

          {/* three */}
          <p className="blog_fetching_main_div_paragraph_margin">
            Have you ever read a webpage or document that used this text without
            paying much attention to it? The lorem ipsum is a placeholder text
            used in publishing and graphic design. This filler text is a short
            paragraph that contains all the letters of the alphabet. The
            characters are spread out evenly so that the reader’s attention is
            focused on the layout of the text instead of its content. Many
            software programs and applications have made it their default dummy
            text. Since the lorem ipsum is always used as a placeholder text,
            its use indicates that this is not a final version of a document,
            thus helping to avoid unnecessary printing. Have you ever read a
            webpage or document that used this text without paying much
            attention to it? The lorem ipsum is a placeholder text used in
            publishing and graphic design. This filler text is a short paragraph
            that contains all the letters of the alphabet. The characters are
            spread out evenly so that the reader’s attention is focused on the
            layout of the text instead of its content. Many software programs
            and applications have made it their default dummy text. Since the
            lorem ipsum is always used as a placeholder text, its use indicates
            that this is not a final version of a document, thus helping to
            avoid unnecessary printing. Have you ever read a webpage or document
            that used this text without paying much attention to it? The lorem
            ipsum is a placeholder text used in publishing and graphic design.
            This filler text is a short paragraph that contains all the letters
            of the alphabet. The characters are spread out evenly so that the
            reader’s attention is focused on the layout of the text instead of
            its content. Many software programs and applications have made it
            their default dummy text. Since the lorem ipsum is always used as a
            placeholder text, its use indicates that this is not a final version
            of a document, thus helping to avoid unnecessary printing.
          </p>

          {/* feting article div end */}

          {/* lastline work  start*/}
          <div className="BlogShowUpperWork_paragraph_div_last_line">
            <p className="BlogShowUpperWork__last_line_name">Effiko</p>
            <p className="BlogShowUpperWork__last_line_date">
              12 May 2022 12:18 AM
            </p>
            <div className="BlogShowUpperWork__last_line_icon_div">
              <img
                src={shareIcon}
                alt="Icon"
                className="BlogShowUpperWork__last_line_icon"
              />
              <p className="BlogShowUpperWork_last_line_icon_share">Share</p>
            </div>
          </div>
          {/* lastline work  end*/}
        </div>
      </div>
    </div>
  );
};

export default BookPopUpUperWork;
