import {useState, useEffect} from "react";


const useAvailableStatus = () =>{
    const [isAvailable, setIsAvailable] = useState(true); 
    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setIsAvailable(true);
        })
        window.addEventListener("offline", ()=>{
            setIsAvailable(false);
        })
    }, []);
    
    return isAvailable;
}

export default useAvailableStatus;