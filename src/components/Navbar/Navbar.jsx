import React from 'react'
import './Navbar.css';
import Toggle from '../toggle/Toggle';
import { Link } from 'react-scroll';
import {CgMenu,CgClose} from 'react-icons/cg'


import { useState } from 'react';

const Navbar = () => {
    const [clicked,setClicked]=useState(false);
    function clickHandler() {
        setClicked(prevClicked => !prevClicked);
    }

    function closeMenu() {
        setClicked(false);
      }
    
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name"><span>G</span>outam.</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className={clicked ? "n-list active" :"n-list"}>
            <ul >
                <Link spy={true} to='intro' smooth={true} activeClass='active'onClick={closeMenu}><li>Home</li></Link>
                    <Link spy={true} to='About' smooth={true} activeClass='active'onClick={closeMenu}><li>About</li></Link>
                    <Link spy={true} to='Experience' smooth={true} activeClass='active'onClick={closeMenu}><li>Experience</li></Link>
                    <Link spy={true} to='Skills' smooth={true} activeClass='active'onClick={closeMenu}><li>Skills</li></Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass='active'onClick={closeMenu}><li>Projects</li></Link>
                    
                    
                </ul>
            </div>
            <Link spy={true} to='Contacts' smooth={true} activeClass='active'>
            <button className='n-button button'>Contact Me</button>
            </Link>
            <div className='mobile-nav-btn'onClick={clickHandler}>
                {clicked ? <CgClose/>: <CgMenu/>}
                
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
