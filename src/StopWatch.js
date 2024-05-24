import { useEffect, useState } from "react"
import './stopWatch.css'


const StopWatch=()=>{
    const [time,setTime]=useState(0)
    const [pause,setPause]=useState(true)
    let timer

    useEffect(()=>{
        if(!pause){
            timer= setInterval(()=>{
                        setTime((prev)=>prev+1)
                    },1000)
        }

        if(pause){
            clearInterval(timer)
        }

        return()=> clearInterval(timer)

    },[pause])

    const startStop=()=>{
        setPause(!pause)
    }

    const resetTime=()=>{
        setTime(0)
        setPause(true)
    }


    return <>
    <div className="stopwatch">
    <label className="heading mb-4">Stop Watch</label>
    <div>
        <div className="timer mb-3">
        {time}
        </div>
        <div className="ms-2">
            <button className={`${pause ? 'btn btn-success' : 'btn btn-warning'}`} onClick={()=>startStop()}>{pause? 'Start' : 'Pause'}</button>
            <button  className="mx-3 btn btn-danger" onClick={()=>resetTime()}>Reset</button>
        </div>
    </div>
    </div>
    
    </>



}

export default StopWatch