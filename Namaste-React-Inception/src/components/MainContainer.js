import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const MainContainer = () => {
  const [restList, setRestList] = useState([]);

  useEffect(()=>{
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async() =>{
    var data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5538241&lng=73.9476689");
    data = await data.json();
    setRestList(data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  }

  const filterRestList = () => {
    setRestList(restList?.filter((res)=> res?.info?.avgRating > 4));
  }

  //conditional rendering
  return restList.length===0 ? <ShimmerUI /> : (
    <div className="body-content">
      <button className="btn top-res" onClick={filterRestList}>Top Restaurants <i className="fa fa-filter"></i></button>
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
