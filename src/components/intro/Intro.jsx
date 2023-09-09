import React from 'react'
import './Intro.css';
import {BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs'
import Vector1 from '../../assets/Vector1.png';
import Vector2 from '../../assets/Vector2.png';

import model from '../../assets/model.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Goutam Sahu</span>
                <span>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Excepturi modi labore rem
                     est voluptatem quam expedita enim quo! Fugit, earum.
                </span>
            </div>
            <button className='i-button button'>Hire Me</button>
            <div className="social-icons">
                <BsGithub/>
                <BsLinkedin/>
                <BsInstagram/>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1}/>
            <img src={Vector2}/>

            {/* <img src={model}/> */}

        </div>

        <div className='blur'style={{background:"rgb(238,210,255)"}}></div>
    </div>
  )
}

export default Intro
