import React,{ useEffect, useRef } from 'react'
import { GameCanvas } from './styles/GameCanvas'
import { StyledWrapper } from './styles/StyledWrapper';
import useGame from './hooks/useGame';
import { StyledControls } from './styles/StyledControls';

export default function DannyWantsOutProject1() {

    const canva = useRef(null);
    const selectAnimation = useRef(null);

    const [initGame,setPlayerState] = useGame({ canva })

    useEffect(() => {
        selectAnimation.current.addEventListener('change', (e) => setPlayerState(e.target.value))
        initGame();
    },[])

    return (
        <StyledWrapper>
            <GameCanvas ref={canva}>
                
            </GameCanvas>
            <StyledControls>
                <label htmlFor="animations">Choose Animation:</label>
                <select name="animations" id="animations" ref={selectAnimation}>
                    <option value="idle">Idle</option>
                    <option value="jump">Jump</option>
                    <option value="fall">Fall</option>
                    <option value="run">run</option>
                    <option value="dizzy">Dizzy</option>
                    <option value="sit">Sit</option>
                    <option value="roll">Roll</option>
                    <option value="bite">Bite</option>
                    <option value="ko">Ko</option>
                    <option value="gethit">Get Hit</option>
                </select>
            </StyledControls>
        </StyledWrapper>
    )
}
