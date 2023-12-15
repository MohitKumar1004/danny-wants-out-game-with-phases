import React,{ useEffect, useRef } from 'react'
import { GameCanvas } from './styles/GameCanvas'
import { StyledWrapper } from './styles/StyledWrapper';
import useGame from './hooks/useGame';

export default function DannyWantsOutProject4() {

    const canva = useRef(null);

    const [initGame] = useGame({ canva })

    useEffect(() => {
        initGame();
    },[])

    return (
        <StyledWrapper>
            <GameCanvas ref={canva}>
                
            </GameCanvas>
        </StyledWrapper>
    )
}
