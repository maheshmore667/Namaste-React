
import { useParams } from "react-router-dom";
import { IMG} from "../Utils/config.js"
import useRestoDetails from "../Utils/useRestoDetails.js";

const RestaurantInfo = () =>{
    const params = useParams();
    const restoDetails = useRestoDetails(params?.id);


    return (
        <div className="resto-item-container">
            <div className="resto-heading">
                <h3>{restoDetails?.name}</h3>
                <span style={{"fontSize" : "14px"}}>{restoDetails?.cuisines?.join(", ")}</span>
                <span style={{"fontSize" : "10px"}}> {restoDetails?.locality}</span>
            </div>
            <div className="menu-container"> 
            {
                restoDetails?.itemCards?.map((item)=>{
                    return (
                        <div  key={item?.card.info.id} style={{"border" : "1px solid black", "borderRadius" : "15px", "margin" : "5px", "padding":"10px", "display":"flex"}}>
                             <div>
                                <b><h4>{item?.card.info?.name}</h4></b>
                                {item?.card.info.ratings.aggregatedRating.rating && <p>{item?.card.info.ratings.aggregatedRating.rating}<span className="fa fa-star checked"></span></p>}
                            </div>
                            <div style={{"marginLeft":"auto"}}>
                                <img style={{"width" : "100px", "height":"100px"}} src={`${IMG}${item?.card?.info?.imageId}`}/>
                            </div>

                        </div>    
                       
                    )
                })
            }
                
            </div>
        </div>
    )
}
export default RestaurantInfo;