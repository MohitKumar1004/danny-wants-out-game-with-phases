import React from 'react'
import { StyledHome } from './styles/StyledHome'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <StyledHome>
      <Link to='/project1'>Vanilla JavaScript Sprite Animation(Project 1)</Link>
    </StyledHome>
  )
}
