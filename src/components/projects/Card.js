import React from 'react'
import './Card.css'
import {themeContext} from '../../Context'
import { useContext } from 'react';

const Card = (project) => {
  const theme=useContext(themeContext)

  const darkmode=theme.state.darkmode;
  return (
    <div className='project-card'>
        <img src={project.imgUrl} alt='projectIMG' width={300} height={200}/>
      <h3>{project.name}</h3>
      <p>{project.toolsUsed}</p>
      <div className='btn-div'>
        <a href={project.live} target='__blank'>
          <button className='button live-btn'style={{color :darkmode ? 'var(--orange)':'black'}}>live demo</button>
        </a>
        <a href={project.github} target='__blank'>
        <button className='button git-btn'>Github</button>

        </a>
      </div>
    </div>
  )
}

export default Card
