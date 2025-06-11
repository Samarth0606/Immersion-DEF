
function RestaurantCard({restArr}) {
    console.log(restArr,"restArr");
  return (
    <div className="flex flex-wrap w-11/12">
        {
            restArr.map((restDetails)=>{
                return(
                    <div key={restDetails.info.id} className="m-8">
                        <img className="w-58 h-42 rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${restDetails.info.cloudinaryImageId}`} alt="" />
                        <h1 className="font-bold text-2xl ml-3 w-58">{restDetails.info.name}</h1>
                        <span className="mx-4 ml-3 ">{restDetails.info.avgRating}</span>
                        <span className="ml-3">{restDetails.info.sla.slaString}</span>
                        <p className="ml-3">{restDetails.info.cuisines[0]}</p>
                        <p className="ml-3">{restDetails.info.locality}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RestaurantCard