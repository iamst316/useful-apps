import { useState,useEffect } from "react"
import './css/Timer.css'
export default function(){
    const [time, changeTime] = useState("00:01:00")
    function Start(){

    }
    function Reset(){
        changeTime("00:00:00")
    }
    

    return(<>
        <div id='main'>
            <div id='title'>TIMER</div>
            <hr />
            <div id='display'>
                <input type='text' onClick={(e)=>{
                    changeTime(e.target.value)
                }} value={time} />
            </div>
            <hr />
            <div id='btns'>
                <button id='start' onClick={Start}>Start</button>
                <button id="reset" onClick={Reset}>Reset</button>
            </div>
        </div>
    </>)
}