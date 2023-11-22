import { CDN_URL } from "../Utils/config";

const RestaurantCard = (props) => {
    const {name, areaName, cuisines, avgRating,costForTwo, cloudinaryImageId} = props.restdata
    return (
      <div className="resto-card">
        <div className="img-content">
          <img className="fooditem" src={CDN_URL + cloudinaryImageId} />
          </div>
          <div className="resto-info">
            <h3 className="resto-name">
              <b>{name}</b>
            </h3>
            <span className="resto-about">{avgRating}Stars</span>
            <span className="resto-about">
              <b>{costForTwo}</b>
            </span>
            <h5 className="resto-cat">
              {cuisines?.join(", ")}
            </h5>
            <h5 className="resto-location">
              <b>{areaName}</b>
            </h5>
          </div>
      
      </div>
    );
  };

export default RestaurantCard;
  