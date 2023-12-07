import React, { useEffect, useRef } from 'react'
import useGame from '../hooks/useGame1';
import { GameCanvas } from '../styles/GameCanvas';

export default function Canvas1() {

    const canva = useRef(null);

    const [initGame] = useGame({ canva })

    useEffect(() => {
        initGame();
    },[])

    return (
        <GameCanvas ref={canva}/>
    )
}
