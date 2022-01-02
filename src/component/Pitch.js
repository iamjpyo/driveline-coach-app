import React, { useState} from 'react';
import "./Pitch.css";

export const Pitch = () => {

    const [firstClick, setFirstClick] = useState(0);
    const [secondClick, setSecondClick] = useState(0);

    return(
        <div className='Pitch'>

                <div className='first-row'>
                        <div value={11} onClick={() => firstClick === 0 ? setFirstClick(11) : setSecondClick(11)}>11</div>
                </div>

                <div className='second-row'>
                    <div className='second-row-inner' value={12} onClick={() => firstClick === 0 ? setFirstClick(12) : setSecondClick(12)}>12</div>

                    <div className='middle-group'>
                        <div className='middle-group-inner' value={7} onClick={() => firstClick === 0 ? setFirstClick(7) : setSecondClick(7)}>7</div>
                        <div className='middle-group-inner' value={8} onClick={() => firstClick === 0 ? setFirstClick(8) : setSecondClick(8)}>8</div>
                        <div className='middle-group-inner' value={9} onClick={() => firstClick === 0 ? setFirstClick(9) : setSecondClick(9)}>9</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === 0 ? setFirstClick(null) : setSecondClick(null)}></div>
                        <div className='middle-group-inner' value={5} onClick={() => firstClick === 0 ? setFirstClick(5) : setSecondClick(5)}>5</div>
                        <div className='middle-group-inner' value={null} onClick={() => firstClick === 0 ? setFirstClick(null) : setSecondClick(null)}></div>
                        <div className='middle-group-inner' value={1} onClick={() => firstClick === 0 ? setFirstClick(1) : setSecondClick(1)}>1</div>
                        <div className='middle-group-inner' value={14} onClick={() => firstClick === 0 ? setFirstClick(14) : setSecondClick(14)}>14</div>
                        <div className='middle-group-inner' value={3} onClick={() => firstClick === 0 ? setFirstClick(3) : setSecondClick(3)}>3</div>
                    </div>

                    <div className='second-row-inner' value={13} onClick={() => firstClick === 0 ? setFirstClick(13) : setSecondClick(13)}>13</div>
                </div>

                <div className='third-row'>
                        <div value={10} onClick={() => firstClick === 0 ? setFirstClick(10) : setSecondClick(10)}>10</div>
                        <div value={15} onClick={() => firstClick === 0 ? setFirstClick(15) : setSecondClick(15)}>15</div>
                </div>
        <div>Firstclick {firstClick}</div>
        <div>Secondclick {secondClick}</div>
            <button>Undo Pitch</button>
            <button>Next Pitch</button>
            <button>End and Save Session</button>
        </div>
    )
}
