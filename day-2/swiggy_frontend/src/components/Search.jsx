import React from 'react'

function Search({setAllRestArr,restArr}) {
    function handleSearch(searchedText){
        let searchedArr = restArr.filter((restDetails)=> restDetails.info.name.toLowerCase().includes(searchedText.toLowerCase()) )
        setAllRestArr(searchedArr)
    }
  return (
        <input onChange={(e)=> handleSearch(e.target.value)}  className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restaurants" />
  )
}

export default Search