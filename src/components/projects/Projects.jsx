import React from 'react'
import './Projects.css';
import ProjectData from '../../ProjectData'
import Cards from './Cards';

const Projects = () => {
  return (
    <div className='p-container'>
        <div>
        <h1>Projects</h1>

        </div>
      <Cards ProjectData={ProjectData}/>
    </div>
  )
}

export default Projects
