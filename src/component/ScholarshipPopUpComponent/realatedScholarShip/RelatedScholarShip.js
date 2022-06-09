import React from 'react'
import "./relatedScholarship.css"
import RelatedScholarShipCard from './realtedScholarShipCard/RelatedScholarShipCard'

const RelatedScholarShip = () => {
  return (
    <div className="relatedArticles_container">
    {/* realted heading */}
    
    <div className="ScholarShip_heading_main_div">
      <div>
        <h1 className="ScholarShip_article_heading">Related Scholarship post’s</h1>
      </div>
      <div className="ScholarShip_line_div"></div>
    </div>

    {/* realtead card */}
    <div className="RelateArticledcard_component_container">
      <div>
        <RelatedScholarShipCard />
      </div>
      <div>
        <RelatedScholarShipCard />
      </div>
      <div>
        <RelatedScholarShipCard />
      </div>
    </div>
  </div>
  )
}

export default RelatedScholarShip
