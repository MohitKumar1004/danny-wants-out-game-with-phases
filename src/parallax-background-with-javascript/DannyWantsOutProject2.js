import React,{ useEffect, useRef } from 'react'
import { GameCanvas } from './styles/GameCanvas'
import { StyledWrapper } from './styles/StyledWrapper';
import useGame from './hooks/useGame';
import { StyledSlider } from './styles/StyledSlider';

export default function DannyWantsOutProject2() {

    const canva = useRef(null);

    const [initGame, setGameSpeed] = useGame({ canva })

    useEffect(() => {
        initGame()
        document.getElementById("slider").value = 0
    })

    return (
        <StyledWrapper>
            <GameCanvas ref={canva}/>
            <StyledSlider>
                <p>Game Speed: <span id="gameSpeed">0</span></p>
                <input type="range" min="0" max="100" id="slider" className="slider" onChange={(evt) =>{
                    setGameSpeed(evt.target.value)
                    document.getElementById("gameSpeed").innerHTML = evt.target.value
                }} />
            </StyledSlider>
        </StyledWrapper>
    )
}
