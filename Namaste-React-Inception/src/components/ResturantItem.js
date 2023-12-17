import { IMG } from "../Utils/config.js";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Store/Slice/cartSlice.js";
import { useLocation } from "react-router-dom";
const RestaurantItem = ({ itemCards }) => {
  const componentUrl = useLocation();
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  

  return (
    <>
    
      {itemCards.map((item) => {
        return (
          <div
            key={item?.card.info.id}
            style={{
              border: "1px solid black",
              borderRadius: "15px",
              margin: "5px",
              padding: "10px",
              display: "flex",
            }}
          >
            <div>
              <b>
                <h4>{item?.card.info?.name}</h4>
              </b>
              {item?.card.info.ratings.aggregatedRating.rating && (
                <p>
                  {item?.card.info.ratings.aggregatedRating.rating}
                  <span className="fa fa-star checked"></span>
                </p>
              )}
              <p>{item?.card?.info?.description}</p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                src={`${IMG}${item?.card?.info?.imageId}`}
              />
              {componentUrl?.pathname!=="/cart" && <button style={{ margin: "2px" }}>
                <span
                  style={{ margin: "10px" }}
                  onClick={() => handleRemoveItem(item)}
                >
                  <b>-</b>
                </span>
                <span onClick={() => handleAddItem(item)}>Add</span>
                <span onClick={() => handleAddItem(item)}>
                  <b style={{ margin: "10px" }}>+</b>
                </span>
              </button>}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RestaurantItem;
