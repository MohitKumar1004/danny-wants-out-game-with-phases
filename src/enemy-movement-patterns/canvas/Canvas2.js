import React, { useEffect, useRef } from 'react'
import useGame from '../hooks/useGame2';
import { GameCanvas } from '../styles/GameCanvas';

export default function Canvas2() {

    const canva = useRef(null);

    const [initGame] = useGame({ canva })

    useEffect(() => {
        initGame();
    },[])

    return (
        <GameCanvas ref={canva}/>
    )
}
