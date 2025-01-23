import React,{useState,useEffect} from "react"



function DigitalClock() {
    
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
       const interval = setInterval(()=> setTime(new Date()),1000)

       return ()=>{
           clearInterval(interval)
        }
    },[])

    function formatTime(){
        const hours = time.getHours().toString().padStart(2,'0')
        const minutes = time.getMinutes().toString().padStart(2,'0')
        const seconds = time.getSeconds().toString().padStart(2,'0')
        const meridium = hours >= 12 ? 'PM' : 'AM'
        const hour=hours % 12 || 12
        return `${hour}:${minutes}:${seconds} ${meridium}`
    }
    
    return (
        <div className="clock-container">
            <p>{formatTime()}</p>
        </div>
    )
}


export default DigitalClock