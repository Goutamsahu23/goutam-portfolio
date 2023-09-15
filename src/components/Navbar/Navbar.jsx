import React from 'react'
import './Navbar.css';
import Toggle from '../toggle/Toggle';
import { Link } from 'react-scroll';
import About from '../about/About';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';


const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name"><span>G</span>outam.</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='active'><li>Home</li></Link>
                    <Link spy={true} to='About' smooth={true} activeClass='active'><li>About</li></Link>
                    <Link spy={true} to='Experience' smooth={true} activeClass='active'><li>Experience</li></Link>
                    <Link spy={true} to='Skills' smooth={true} activeClass='active'><li>Skills</li></Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass='active'><li>Projects</li></Link>
                    
                    
                </ul>
            </div>
            <Link spy={true} to='Contacts' smooth={true} activeClass='active'>
            <button className='n-button button'>Contact Me</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar
