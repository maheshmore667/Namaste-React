import { useParams } from "react-router-dom";
import useRestoDetails from "../Utils/useRestoDetails.js";
import { useState } from "react";

import RestaurantCat from "./RestaurantCat.js";

const RestaurantInfo = () => {
  const params = useParams();
  const { restoCatDetails, restoDetails } = useRestoDetails(params?.id);
  const [showIndex, setShowIndex] = useState(null);
  //console.log(restoCatDetails);
  return (
    <div className="resto-item-container">
      <div className="resto-heading">
        <h3>{restoDetails?.name}</h3>
        <span style={{ fontSize: "14px" }}>
          {restoDetails?.cuisines?.join(", ")}
        </span>
        <span style={{ fontSize: "10px" }}> {restoDetails?.locality}</span>
      </div>
      {
        restoCatDetails?.map((details, index)=>{
            return <RestaurantCat details={details} 
            showItems = {index===showIndex ? true : false}
            setShowIndex = {setShowIndex}
            index = {index}
            showIndex = {showIndex}
            key={`index ${details?.card?.card?.title}`}
            />
        })
      }
      
    </div>
  );
};
export default RestaurantInfo;
