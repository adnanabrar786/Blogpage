import React, { useState } from "react";
import "./headingallarticles.css";
import AllCategory from "../../category/allCategory/AllCategory";
import CategoryOne from "../../category/categoryOne/CategoryOne";
import CategoryTwo from "../../category/categoryTwo/CategoryTwo"; 
import CategoryThree from "../../category/categoryThree/CategoryThree";
import CategoryFour from "../../category/categoryFour/CategoryFour";

const HeadingAllArticles = () => {
  const [allCategoy, setAllCategory] = useState(true);
  const [OneCategory, setOneCategory] = useState(false);
  const [TwoCategory, setTwoCategory] = useState(false);
  const [ThreeCategory, setThreeCategory] = useState(false);
  const [FourCategory, setFourCategory] = useState(false);

  const handleAll = () => {
    setAllCategory(true)
    setOneCategory(false)
    setTwoCategory(false)
    setThreeCategory(false)
    setFourCategory(false)
  };
  
  const handleCategoryOne = () => {
    setAllCategory(false)
    setOneCategory(true)
    setTwoCategory(false)
    setThreeCategory(false)
    setFourCategory(false)
    
  };
  
  const handleClickCategoryTwo = () => {
    setAllCategory(false)
    setOneCategory(false)
    setTwoCategory(true)
    setThreeCategory(false)
    setFourCategory(false)
    
  };
  const handleClickCategoryThree = () => {
    setAllCategory(false)
    setOneCategory(false)
    setTwoCategory(false)
    setThreeCategory(true)
    setFourCategory(false)
    
  };

  const handleClickCategoryFour = () => {
    setAllCategory(false)
    setOneCategory(false)
    setTwoCategory(false)
    setThreeCategory(false)
    setFourCategory(true)
    
  };


  return (
    <div className="HeadingAllArticles_container">
      <div className="heading_main_div">
        <div className="Category_heading" onClick={handleAll}>
          All
        </div>
        <div className="Category_heading" onClick={handleCategoryOne}>
          Category 1
        </div>
        <div className="Category_heading" onClick={handleClickCategoryTwo}>
          Category 2
        </div>
        <div className="Category_heading" onClick={handleClickCategoryThree}>
          Category 3
        </div>
        <div className="Category_heading" onClick={handleClickCategoryFour}>
          Category 4
        </div>
      </div>

      <div>
        {
            allCategoy ? <AllCategory/> : null
        }
          {
            OneCategory ? <CategoryOne/> : null
        }
          {
            TwoCategory ? <CategoryTwo/> : null
        }
          {
            ThreeCategory ? <CategoryThree/> : null
        }
          {
            FourCategory ? <CategoryFour/> : null
        }
      </div>
    </div>
  );
};

export default HeadingAllArticles;
