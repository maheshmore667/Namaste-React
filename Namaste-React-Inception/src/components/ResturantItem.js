import { IMG } from "../Utils/config.js";

const RestaurantItem = ({itemCards}) =>{
    return (
        itemCards.map((item) => {
            return (
               <div  key={item?.card.info.id} style={{"border" : "1px solid black", "borderRadius" : "15px", "margin" : "5px", "padding":"10px", "display":"flex"}}>
                    <div>
                       <b><h4>{item?.card.info?.name}</h4></b>
                       {item?.card.info.ratings.aggregatedRating.rating && <p>{item?.card.info.ratings.aggregatedRating.rating}<span className="fa fa-star checked"></span></p>}
                       <p>{item?.card?.info?.description}</p>
                   </div>
                   <div style={{"marginLeft":"auto"}}>
                       <img style={{"width" : "100px", "height":"100px"}} src={`${IMG}${item?.card?.info?.imageId}`}/>
                   </div>
               </div>    
           )
       })
    )
    
}
export default RestaurantItem;