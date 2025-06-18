import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling"
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

function Body() {
    const restArr = ApiCalling();
    const [allRestArr,setAllRestArr] = useState(restArr);
    // console.log(allRestArr , "allRestArr");
    const [isActive1,setIsActive1] = useState(false)
    const [isActive2,setIsActive2] = useState(false)

    useEffect(function(){
      if(restArr && restArr.length){
        setAllRestArr(restArr)
      }
    } , [restArr])

    function handleRating(restArr){
      let newArr = restArr.filter((restDetails)=>restDetails.info.avgRating >= 4.5)
      setAllRestArr(newArr)
      setIsActive1(true)
      setIsActive2(false)
    }
    function handleReset(restArr){
      setAllRestArr(restArr)
      setIsActive1(false)
      setIsActive2(true)
    }

  return (
    <div className="ml-20 mt-4">
       <h1 className="text-2xl">Restaurants with online food delivery in Aligarh</h1>
       <button onClick={()=> handleRating(restArr)} className={isActive1 ? "bg-amber-600 border rounded-2xl p-2 mx-4" : "border rounded-2xl p-2 mx-4"}>Ratings 4.5+</button>
       <button onClick={()=> handleReset(restArr)} className={isActive2 ? "bg-amber-600 border rounded-2xl p-2 mx-4" : "border rounded-2xl p-2 mx-4"}>Reset</button>
        <Search restArr={restArr} setAllRestArr={setAllRestArr} />    
        <div className="mx-auto">
            <RestaurantCard restArr={allRestArr} />
        </div>
    </div>
  )
}

export default Body