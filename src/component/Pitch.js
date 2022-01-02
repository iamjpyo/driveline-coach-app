import React, { useState} from 'react';
import "./Pitch.css";

export const Pitch = () => {

    const [firstClick, setFirstClick] = useState(0);
    const [secondClick, setSecondClick] = useState(0);

    const reset = () => {
        setFirstClick(0);
        setSecondClick(0);
    }

    return(
        <div className='Pitch'>

                <div className='first-row'>
                        <div value={11} onClick={() => firstClick === 0 ? setFirstClick(11) : secondClick === 0 ? setSecondClick(11): secondClick}>11</div>
                </div>

                <div className='second-row'>
                    <div className='second-row-inner' value={12} onClick={() => firstClick === 0 ? setFirstClick(12) : secondClick === 0 ? setSecondClick(12): secondClick}>12</div>

                    <div className='middle-group'>
                        <div className='middle-group-inner' value={7} onClick={() => firstClick === 0 ? setFirstClick(7) : secondClick === 0 ? setSecondClick(7): secondClick}>7</div>
                        <div className='middle-group-inner' value={8} onClick={() => firstClick === 0 ? setFirstClick(8) : secondClick === 0 ? setSecondClick(8): secondClick}>8</div>
                        <div className='middle-group-inner' value={9} onClick={() => firstClick === 0 ? setFirstClick(9) : secondClick === 0 ? setSecondClick(9): secondClick}>9</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === 0 ? setFirstClick(null) : secondClick === 0 ? setSecondClick(null): secondClick}></div>
                        <div className='middle-group-inner' value={5} onClick={() => firstClick === 0 ? setFirstClick(5) : secondClick === 0 ? setSecondClick(5): secondClick}>5</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === 0 ? setFirstClick(null) : secondClick === 0 ? setSecondClick(null): secondClick}></div>
                        <div className='middle-group-inner' value={1} onClick={() => firstClick === 0 ? setFirstClick(1) : secondClick === 0 ? setSecondClick(1): secondClick}>1</div>
                        <div className='middle-group-inner' value={14} onClick={() => firstClick === 0 ? setFirstClick(14) : secondClick === 0 ? setSecondClick(14): secondClick}>14</div>
                        <div className='middle-group-inner' value={3} onClick={() => firstClick === 0 ? setFirstClick(3) : secondClick === 0 ? setSecondClick(3): secondClick}>3</div>
                    </div>

                    <div className='second-row-inner' value={13} onClick={() => firstClick === 0 ? setFirstClick(13) : secondClick === 0 ? setSecondClick(13): secondClick}>13</div>
                </div>

                <div className='third-row'>
                        <div value={10} onClick={() => firstClick === 0 ? setFirstClick(10) : secondClick === 0 ? setSecondClick(10): secondClick}>10</div>
                        <div value={15} onClick={() => firstClick === 0 ? setFirstClick(15) : secondClick === 0 ? setSecondClick(15): secondClick}>15</div>
                </div>
        <div>Firstclick {firstClick}</div>
        <div>Secondclick {secondClick}</div>
            <button onClick={reset}>Undo Pitch</button>
            <button>Next Pitch</button>
            <button>End and Save Session</button>
        </div>
    )
}
