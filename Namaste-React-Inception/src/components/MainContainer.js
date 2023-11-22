import RestaurantCard from "./RestaurantCard";
import { restList } from "../Utils/mockData";

  

const MainContainer = () => {
    return (
      <div className="main-container">
        {
          restList?.map(restaurant => <RestaurantCard key={restaurant?.info?.id} restdata = {restaurant?.info}/>)
        }
        
        
      </div>
    );
  };
  
export default MainContainer;