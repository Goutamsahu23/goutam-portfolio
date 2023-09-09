import React from 'react'
import './Navbar.css';



const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Goutam</div>
            <span>toggle btn</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
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
