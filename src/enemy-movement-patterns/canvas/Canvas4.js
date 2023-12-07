import React, { useEffect, useRef } from 'react'
import useGame from '../hooks/useGame4';
import { GameCanvas } from '../styles/GameCanvas';

export default function Canvas4() {

    const canva = useRef(null);

    const [initGame] = useGame({ canva })

    useEffect(() => {
        initGame();
    },[])

    return (
        <GameCanvas ref={canva}/>
    )
}
