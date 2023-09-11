import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <>
    <h1 className='e-heading'>My Journy</h1>
    <div className="timeline">
        
        <div className='point-odd'></div>
        <div className="container left-container">
            
            <div className="text-box">
            
                <h2>B.Tech</h2>
                <small>Computer science and Technology</small>
                <p>8.2 cgpa</p>

                <p>NIST,Berhampur</p>
                <small>2019-2023</small>
            </div>
        </div>
        <div className='point-even'></div>
        <div className="container right-container">
            <div className="text-box">
            

                <h2>12th</h2>
                <small>Computer science and Technology</small>
                <p>8.2 cgpa</p>

                <p>NIST,Berhampur</p>
                <small>2019-2023</small>
            </div>
        </div>
        <div className='point-odd'></div>
        <div className="container left-container">
            <div className="text-box">
            

                <h2>10th</h2>
                <small>Computer science and Technology</small>
                <p>8.2 cgpa</p>

                <p>NIST,Berhampur</p>
                <small>2019-2023</small>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Experience
