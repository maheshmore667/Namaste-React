import { useParams } from "react-router-dom";
import useRestoDetails from "../Utils/useRestoDetails.js";

import RestaurantCat from "./RestaurantCat.js";

const RestaurantInfo = () => {
  const params = useParams();
  const { restoCatDetails, restoDetails } = useRestoDetails(params?.id);
  console.log("restoCatDetails: ",restoCatDetails);

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
        restoCatDetails?.map((details)=>{
            return <RestaurantCat details={details} />
        })
      }
      
    </div>
  );
};
export default RestaurantInfo;
