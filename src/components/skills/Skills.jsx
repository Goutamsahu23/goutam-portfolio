import React from 'react'
import './Skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import java from '../../assets/java.png'
import { motion } from 'framer-motion'
const Skills = () => {


  const skillcards = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const card = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };



  return (
    <div className="skills">
        <h1>Skills</h1>
        <motion.div 
        className="skillcards"
        variants={skillcards}
        initial="hidden"
        animate="visible"
        >
          <motion.div className='card'
          variants={card}
         
          >
          <img src={html} alt='html' width={100} height={100}/>
          <span>Html</span>
          </motion.div>

          <motion.div className='card'

          variants={card}
          >
          <img src={css} alt='html' width={100} height={100}/>
          <span>css</span>
          </motion.div>

          <motion.div className='card' variants={card}>
          <img src={js} alt='html' width={100} height={100}/>
          <span>javascript</span>
          </motion.div>

          <motion.div className='card'variants={card}>
          <img src={react} alt='html' width={100} height={100}/>
          <span>React JS</span>
          </motion.div>

          <motion.div className='card' variants={card}>
          <img src={redux} alt='html' width={100} height={100}/>
          <span>redux</span>
          </motion.div>

          <motion.div className='card' variants={card}>
          <img src={java} alt='html' width={100} height={100}/>
          <span>Java</span>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills
