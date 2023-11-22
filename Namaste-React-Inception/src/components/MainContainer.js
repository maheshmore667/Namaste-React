import RestaurantCard from "./RestaurantCard";
import { restList as restListData } from "../Utils/mockData";
import { useState } from "react";

const MainContainer = () => {
  const [restList, setRestList] = useState(restListData);
  const filterRestList = () => {
    setRestList(restList?.filter((res)=> res?.info?.avgRating > 4));
  }
  return (
    <div className="body-content">
      <button className="btn top-res" onClick={filterRestList}>Top Restaurants <i class="fa fa-filter"></i></button>
      <div className="main-container">
        {restList?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            restdata={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
