import RestaurantCard from "./RestaurantCard";
import { restList as restListData } from "../Utils/mockData";
import { useEffect, useState } from "react";

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

  if(restList.length===0) {
      return (<h1>No Data here..</h1>)
  }
  return (
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
