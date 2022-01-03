import React, { useState} from 'react';
import "./Pitch.css";
import driveline from "../images/driveline.png";

export const Pitch = () => {

    const [firstClick, setFirstClick] = useState(null);
    const [secondClick, setSecondClick] = useState(null);
    const [toggle, setToggle] = useState(false);


    /* Empty array to be filled */
    const [theArray, setTheArray] = useState([]);
    const timestamp = Date.now();
    /* Something to save current states as object and then push into empty array*/
    let updatePitch = [
        ...theArray,
        {   date: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp),
            coach: firstClick,
            pitcher: secondClick
        }
    ]
    const nextPitch = () =>{
        if(firstClick !== null && secondClick !== null){
            setTheArray(updatePitch)
            reset();
            alert("Coordinates successfully stored!")
            console.log(theArray);
        } else{
            alert("Please enter a desired Pitch and where Pitch actually landed.")
        }

    } 

    const endIt = () =>{
        if(firstClick !== null && secondClick !== null){
            setTheArray(updatePitch)
            reset();
            setToggle(true);
            alert("Session ended!")
        } else{
            alert("Please enter a desired Pitch and where Pitch actually landed.")
        }
    }

    const reset = () => {
        setFirstClick(null);
        setSecondClick(null);
    }

    const requestedPitch = firstClick !== null ? <p className={`position${firstClick} ostyle`}>O</p> : null;
    const requestedPitch2 = secondClick !== null ? <h1 className={`position${secondClick} xstyle`}>X</h1> : null;


    return(
        <div className='Pitch'>
            <img className='logo' src={driveline} alt="Driveline Baseball logo" />
                <div className='first-row'>
                        <div value={11} onClick={() => firstClick === null ? setFirstClick(11) : secondClick === null ? setSecondClick(11): secondClick}>
                            11 {firstClick === 11 ? requestedPitch : null}{secondClick === 11 ? requestedPitch2 : null}
                        </div>
                </div>

                <div className='second-row'>
                    <div className='second-row-inner' value={12} onMouseDown={() => firstClick === null ? setFirstClick(12) : secondClick === null ? setSecondClick(12): secondClick}>12{firstClick === 12 ? requestedPitch : null}{secondClick === 12 ? requestedPitch2 : null}</div>
                    
                    <div className='middle-group'>
                        <div className='middle-group-inner' value={7} onClick={() => firstClick === null ? setFirstClick(7) : secondClick === null ? setSecondClick(7): secondClick}>7{firstClick === 7 ? requestedPitch : null}{secondClick === 7 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={8} onClick={() => firstClick === null ? setFirstClick(8) : secondClick === null ? setSecondClick(8): secondClick}>8{firstClick === 8 ? requestedPitch : null}{secondClick === 8 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={9} onClick={() => firstClick === null ? setFirstClick(9) : secondClick === null ? setSecondClick(9): secondClick}>9{firstClick === 9 ? requestedPitch : null}{secondClick === 9 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === null ? setFirstClick(0) : secondClick === null ? setSecondClick(0): secondClick}>{firstClick === 0 ? requestedPitch : null}{secondClick === 0 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={5} onClick={() => firstClick === null ? setFirstClick(5) : secondClick === null ? setSecondClick(5): secondClick}>5{firstClick === 5 ? requestedPitch : null}{secondClick === 5 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === null ? setFirstClick(0) : secondClick === null ? setSecondClick(0): secondClick}>{firstClick === 0 ? requestedPitch : null}{secondClick === 0 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={1} onClick={() => firstClick === null ? setFirstClick(1) : secondClick === null ? setSecondClick(1): secondClick}>1{firstClick === 1 ? requestedPitch : null}{secondClick === 1 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={14} onClick={() => firstClick === null ? setFirstClick(14) : secondClick === null ? setSecondClick(14): secondClick}>14{firstClick === 14 ? requestedPitch : null}{secondClick === 14 ? requestedPitch2 : null}</div>
                        <div className='middle-group-inner' value={3} onClick={() => firstClick === null ? setFirstClick(3) : secondClick === null ? setSecondClick(3): secondClick}>3{firstClick === 3 ? requestedPitch : null}{secondClick === 3 ? requestedPitch2 : null}</div>
                    </div>

                    <div className='second-row-inner' value={13} onClick={() => firstClick === null ? setFirstClick(13) : secondClick === null ? setSecondClick(13): secondClick}>13{firstClick === 13 ? requestedPitch : null}{secondClick === 13 ? requestedPitch2 : null}</div>
                </div>

                <div className='third-row'>
                        <div value={10} onClick={() => firstClick === null ? setFirstClick(10) : secondClick === null ? setSecondClick(10): secondClick}>10{firstClick === 10 ? requestedPitch : null}{secondClick === 10 ? requestedPitch2 : null}</div>
                        <div value={15} onClick={() => firstClick === null ? setFirstClick(15) : secondClick === null ? setSecondClick(15): secondClick}>15{firstClick === 15 ? requestedPitch : null}{secondClick === 15 ? requestedPitch2 : null}</div>
                </div>
            <div>Intended pitch location: {firstClick}</div>
            <div>Actual pitch location: {secondClick}</div>
            
            <button onClick={reset}>Undo Pitch</button>
            <button onClick={nextPitch}>Next Pitch</button>
            <button onClick={endIt}>End and Save Session</button>
            {toggle && (
                <ul>
                    {theArray.map((e) => (
                        <ul>
                            <li>Date and Time: {e.date}</li>
                            <li>Intended pitch: {e.coach}</li>
                            <li>Actual pitch: {e.pitcher}</li>
                        </ul>

                    )

                    )}
                </ul>
            )}
        </div>
    )
}
