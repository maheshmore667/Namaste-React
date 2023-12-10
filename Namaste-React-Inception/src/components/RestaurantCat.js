import RestaurantItem from "./ResturantItem";
import { useState } from "react";

const RestaurantCat = ({ details }) => {
    const [showItems, setShowItems] = useState(false);
  const togglePallette = () => {
    showItems ? setShowItems(false) : setShowItems(true);
  };

  return (
    <>
            <div
              key={`index${details?.card?.card?.type}`}
              className="cat-header"
              onClick={togglePallette}
            >
              <h6>
                <b>
                  {details?.card?.card?.title}(
                  {details.card.card.itemCards.length})
                </b>
              </h6>
              <b>
                <span style={{ paddingRight: "10px", fontSize: "18px" }}>
                  &#8681;
                </span>
              </b>
            </div>
            {showItems && (
              <RestaurantItem itemCards={details?.card?.card?.itemCards} />
            )}
    </>
  );
};

export default RestaurantCat;
