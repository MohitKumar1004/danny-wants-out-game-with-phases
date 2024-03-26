import React from 'react'
import { StyledHome } from './styles/StyledHome'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <StyledHome>
      <Link to='/project1'>Vanilla JavaScript Sprite Animation(Project 1)</Link>
      <Link to='/project2'>Parallax Background with JavaScript(Project 2)</Link>
      <Link to='/project3'>Enemy Movement Patterns(Project 3)</Link>
      <Link to='/project4'>Collision Detection for sprite sheet(Project 4)</Link>
      {/* <Link to='/project5'>Enemy Movement Patterns(Project 5)</Link>
      <Link to='/project6'>Enemy Movement Patterns(Project 6)</Link> */}
    </StyledHome>
  )
}
