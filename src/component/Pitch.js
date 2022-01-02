import React, { useState} from 'react';
import "./Pitch.css";
import driveline from "../images/driveline.png"

export const Pitch = () => {

    const [firstClick, setFirstClick] = useState(null);
    const [secondClick, setSecondClick] = useState(null);
   
    /* Empty array to be filled */
    const [theArray, setTheArray] = useState([]);

    /* Something to save current states as object and then push into empty array*/
    const nextPitch = () =>{
        if(firstClick !== null && secondClick !== null){
            const updatePitch = [
                ...theArray,
                {
                    coach: firstClick,
                    pitcher: secondClick
                }
            ]
            setTheArray(updatePitch)
            reset();
            console.log(theArray)
        } else{
            alert("Please enter a desired Pitch and where Pitch actually landed.")
        }

    }
    

    const reset = () => {
        setFirstClick(null);
        setSecondClick(null);
    }

    const requestedPitch = firstClick === null ? <img src={driveline} alt="Desired Pitch" /> : null;

    return(
        <div className='Pitch'>

                <div className='first-row'>
                        <div value={11} onClick={() => firstClick === null ? setFirstClick(11) : secondClick === null ? setSecondClick(11): secondClick}>11</div>
                </div>

                <div className='second-row'>
                    <div className='second-row-inner' value={12} onClick={() => firstClick === null ? setFirstClick(12) : secondClick === null ? setSecondClick(12): secondClick}>12</div>
                    
                    <div className='middle-group'>
                        <div className='middle-group-inner' value={7} onClick={() => firstClick === null ? setFirstClick(7) : secondClick === null ? setSecondClick(7): secondClick}>7</div>
                        <div className='middle-group-inner' value={8} onClick={() => firstClick === null ? setFirstClick(8) : secondClick === null ? setSecondClick(8): secondClick}>8</div>
                        <div className='middle-group-inner' value={9} onClick={() => firstClick === null ? setFirstClick(9) : secondClick === null ? setSecondClick(9): secondClick}>9</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === null ? setFirstClick(0) : secondClick === null ? setSecondClick(0): secondClick}></div>
                        <div className='middle-group-inner' value={5} onClick={() => firstClick === null ? setFirstClick(5) : secondClick === null ? setSecondClick(5): secondClick}>5</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === null ? setFirstClick(0) : secondClick === null ? setSecondClick(0): secondClick}></div>
                        <div className='middle-group-inner' value={1} onClick={() => firstClick === null ? setFirstClick(1) : secondClick === null ? setSecondClick(1): secondClick}>1</div>
                        <div className='middle-group-inner' value={14} onClick={() => firstClick === null ? setFirstClick(14) : secondClick === null ? setSecondClick(14): secondClick}>14</div>
                        <div className='middle-group-inner' value={3} onClick={() => firstClick === null ? setFirstClick(3) : secondClick === null ? setSecondClick(3): secondClick}>3</div>
                    </div>

                    <div className='second-row-inner' value={13} onClick={() => firstClick === null ? setFirstClick(13) : secondClick === null ? setSecondClick(13): secondClick}>13</div>
                </div>

                <div className='third-row'>
                        <div value={10} onClick={() => firstClick === null ? setFirstClick(10) : secondClick === null ? setSecondClick(10): secondClick}>10</div>
                        <div value={15} onClick={() => firstClick === null ? setFirstClick(15) : secondClick === null ? setSecondClick(15): secondClick}>15</div>
                </div>

            <button onClick={reset}>Undo Pitch</button>
            <button onClick={nextPitch}>Next Pitch</button>
            <button>End and Save Session</button>
            <div>Requested Pitch: {firstClick}</div>
        <div>Actual Pitch: {secondClick}</div>
        </div>
    )
}
