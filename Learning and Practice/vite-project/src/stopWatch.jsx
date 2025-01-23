
import { useEffect, useState, useRef } from "react"

function StopWatch() {

    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {


        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }
        return () => clearInterval(intervalIdRef.current);
    }, [isRunning])

    function start() {
        setRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop() {
        setRunning(false)
    }

    function reset() {
        setRunning(false)
        setElapsedTime(0)
    }

    function formatTime(ms) {
        const milliseconds = Math.floor((ms % 1000) / 10);
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 60000) % 60);
        const hours = Math.floor(ms / 3600000);
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
   
    }

    return (
        <div className="stopWatch">
            <div className="display">{formatTime(elapsedTime)} </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">stop</button>
                <button onClick={reset} className="reset-button">reset</button>
            </div>
        </div>
    )

}

export default StopWatch