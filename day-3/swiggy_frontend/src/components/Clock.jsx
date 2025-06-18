import { useEffect, useState } from "react"

function Clock() {
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(function(){
        let id = setInterval( function(){
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        // cleanup fn
        return ()=>clearInterval(id)
    } , [])

  return (
    <div>Clock :  {time}</div>
  )
}

export default Clock