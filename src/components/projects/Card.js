import React from 'react'
import './Card.css'

const Card = (project) => {
  return (
    <div className='project-card'>
        <img src={project.imgUrl} alt='projectIMG' width={300} height={200}/>
      <h1>{project.name}</h1>
      <p>{project.toolsUsed}</p>
      <div className='btn-div'>
        <button className='button live-btn'>live demo</button>
        <button className='button git-btn'>Github</button>
      </div>
    </div>
  )
}

export default Card
