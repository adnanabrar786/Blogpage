import React from "react";
import SchlarShipPopUpUperWork from "../../component/ScholarshipPopUpComponent/SchlarShipPopUpUperWork/SchlarShipPopUpUperWork";
import RelatedScholarShip from "../../component/ScholarshipPopUpComponent/realatedScholarShip/RelatedScholarShip";
// import "./scholarshipPopUp/scholarshipPopUp";
import Sponser from "../../component/sponser/Sponser";

const ScholarShipPopUp = () => {
  return (
    <div>
      <SchlarShipPopUpUperWork />
      <RelatedScholarShip />

      <Sponser />
    </div>
  );
};

export default ScholarShipPopUp;
