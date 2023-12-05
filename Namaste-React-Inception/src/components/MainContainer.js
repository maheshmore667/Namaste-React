import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useNavigate } from "react-router-dom";
import {labelledRestaurantCard} from "../components/MainContainer.js"
import useAvailableStatus from "../Utils/useAvailableStatus";

const MainContainer = () => {
  const [restList, setRestList] = useState([]);
  const [cpyRestList, setCpyRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const LabelledRestaurantCardComponent = labelledRestaurantCard(RestaurantCard);
  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    var data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=18.5538241&lng=73.9476689"
    );
    data = await data.json();
    console.log(data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants);
    if (
      data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    ) {
      setRestList(
        data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCpyRestList(
        data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else {
      setRestList(
        data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCpyRestList(
        data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  };

  const filterRestList = () => {
    setCpyRestList(cpyRestList?.filter((res) => res?.info?.avgRating > 4));
  };

  const routeToRestro = (id) => {
    navigate(`/restro/${id}`);
  };

  const isAvailable = useAvailableStatus();

  if (!isAvailable) {
    return <h1>Looks like your internet connection is offline! </h1>;
  }

  if (restList.length === 0) {
    return <ShimmerUI />;
  }

  if (restList.length === 0) {
    return <ShimmerUI />;
  }

  return (
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
                return resObj?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
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
          <div
            key={restaurant?.info?.id}
            onClick={() => {
              routeToRestro(restaurant?.info?.id);
            }}
          >  
            {restaurant?.info?.promoted ? <LabelledRestaurantCardComponent restdata={restaurant?.info} /> : <RestaurantCard restdata={restaurant?.info} /> }
            
          </div>
        ))}
      </div>
    </div>
  );
};

export const labelledRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
        <div >
          <label className="promoted-heading">Promoted</label>
          <RestaurantCard {...props} />
        </div>
    );
  };
};

export default MainContainer;
