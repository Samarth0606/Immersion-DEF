import axios from "axios"
import { useEffect, useState } from "react";

function ApiCalling(){
    const [allRestaurantArr,setAllRestaurantArr] = useState([])
    
    useEffect(function(){
        async function calling(){
            const API = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.87960&lng=78.07620&carousel=true&third_party_vendor=1" 
            const resp = await axios.get(API);
            // console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurantArr(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    } , [])

    return allRestaurantArr;
}

export default ApiCalling;