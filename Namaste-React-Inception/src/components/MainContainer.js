import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const MainContainer = () => {
  const [restList, setRestList] = useState([]);
  const [cpyRestList, setCpyRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    var data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=18.5538241&lng=73.9476689"
    );
    data = await data.json();
    setRestList(
      data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setCpyRestList(
      data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterRestList = () => {
    setRestList(restList?.filter((res) => res?.info?.avgRating > 4));
  };

  //conditional rendering
  return restList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-content">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <input
          type="text"
          style={{ borderRadius: "10px" }}
          className="top-res"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn"
          style={{ marginTop: "10px" }}
          onClick={() => {
            setCpyRestList(
              restList?.filter((resObj) => {
                return resObj?.info?.name.toLowerCase().includes(searchText.toLowerCase());
              })
            );
          }}
        >
          <i className="fa fa-search"></i>
        </button>
        <button className="btn top-res" onClick={filterRestList}>
          Top Restaurants <i className="fa fa-filter"></i>
        </button>
      </div>

      <div className="main-container">
        {cpyRestList?.map((restaurant) => (
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
