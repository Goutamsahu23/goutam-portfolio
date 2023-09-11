import React from 'react'
import './Skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import java from '../../assets/java.png'
const Skills = () => {
  return (
    <div className="skills">
        <h1>Skills</h1>
        <div className='skill-cards'>
          <div className='card'>
          <img src={html} alt='html' width={100} height={100}/>
          <span>Html</span>
          </div>

          <div className='card'>
          <img src={css} alt='html' width={100} height={100}/>
          <span>css</span>
          </div>

          <div className='card'>
          <img src={js} alt='html' width={100} height={100}/>
          <span>javascript</span>
          </div>

          <div className='card'>
          <img src={react} alt='html' width={100} height={100}/>
          <span>React JS</span>
          </div>

          <div className='card'>
          <img src={redux} alt='html' width={100} height={100}/>
          <span>redux</span>
          </div>

          <div className='card'>
          <img src={java} alt='html' width={100} height={100}/>
          <span>Java</span>
          </div>
        </div>
    </div>
  )
}

export default Skills
