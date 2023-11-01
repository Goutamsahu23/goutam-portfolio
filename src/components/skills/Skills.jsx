import React from 'react'
import './Skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import java from '../../assets/java.png'
import github from '../../assets/github.png'
import express from '../../assets/express.png'
import nodejs from '../../assets/nodejs.png'
import tailwind from '../../assets/tailwind.png'


import { motion } from 'framer-motion'
const Skills = () => {


  const skillcards = {
    hidden: { opacity: 0, scale: 0.8 },
    // visible: 
  };

  const card = {
    hidden: { y: 20, opacity: 0 },
    // visible: 

  };



  return (
    <div className="skills" id='Skills'>
      <h1>Skills</h1>
      <motion.div
        className="skillcards"
        variants={skillcards}
        initial="hidden"
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { ease: "easeOut", duration: 1 }
        }}
      >
        <motion.div className='card'
          variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }

          }}


        >
          <img src={html} alt='html' width={100} height={100} />
          <span>Html</span>
        </motion.div>

        <motion.div className='card'

          variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}
        >
          <img src={css} alt='html' width={100} height={100} />
          <span>Css</span>
        </motion.div>

        <motion.div className='card'

          variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}
        >
          <img src={tailwind} alt='html' width={100} height={100} />
          <span>Tailwind Css</span>
        </motion.div>

        <motion.div className='card' variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}>
          <img src={js} alt='html' width={100} height={100} />
          <span>javascript</span>
        </motion.div>

        <motion.div className='card' variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}>
          <img src={react} alt='html' width={100} height={100} />
          <span>React JS</span>
        </motion.div>

        <motion.div className='card' variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}>
          <img src={redux} alt='html' width={100} height={100} />
          <span>redux</span>
        </motion.div>

        <motion.div className='card'
          variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }

          }}


        >
          <img src={nodejs} alt='html' width={100} height={100} />
          <span>NodeJs</span>
        </motion.div>

        <motion.div className='card'
          variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }

          }}


        >
          <img src={express} alt='html' width={100} height={100} />
          <span>ExpressJs</span>
        </motion.div>

        <motion.div className='card' variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}>
          <img src={java} alt='html' width={100} height={100} />
          <span>Java</span>
        </motion.div>

        <motion.div className='card' variants={card}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1 }
          }}>
          <img src={github} alt='html' width={100} height={100} />
          <span>GitHub</span>
        </motion.div>

       
      </motion.div>
    </div>
  )
}

export default Skills
