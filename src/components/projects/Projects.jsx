import React from 'react'
import './Projects.css';
import ProjectData from '../../ProjectData'
import Cards from './Cards';
import { motion } from 'framer-motion';


const Projects = () => {
  const transition={
    initial:{y:'5%',scale:0.8,opacity:0},
    // animate:{}
  }
  return (
    <motion.div className='p-container' id='Projects'
    initial="initial"
    
    whileInView={{y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 }}}
    variants={transition}>
        <div>
        <h1>Projects</h1>

        </div>
      <Cards ProjectData={ProjectData}/>
    </motion.div>
  )
}

export default Projects
