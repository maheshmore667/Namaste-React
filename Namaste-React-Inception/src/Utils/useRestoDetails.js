import { useEffect, useState } from "react";
import {RESTO_INFO} from "../Utils/config.js"

const useRestoDetails = (resId) =>{
    const [restoDetails, setRestodetails] = useState(null)

    useEffect(()=>{
        fetchRestroItem();
    }, []);

    const fetchRestroItem = async() =>{
        const data =  await fetch(`https://corsproxy.io/?${RESTO_INFO}${resId}`);
        const responseData = await data?.json();
        const {name, cuisines, locality} = responseData?.data?.cards[0]?.card?.card?.info
        const itemCards = responseData?.data?.cards[3].groupedCard.cardGroupMap.REGULAR.cards[7].card.card.itemCards
        setRestodetails({name, cuisines, locality, itemCards})
    }
    return restoDetails;
}
export default useRestoDetails;