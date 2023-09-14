import React from 'react'
import './Navbar.css';
import Toggle from '../toggle/Toggle';



const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name"><span>G</span>outam.</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    
                    
                </ul>
            </div>
            <button className='n-button button'>Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar
