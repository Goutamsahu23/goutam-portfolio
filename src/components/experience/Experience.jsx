import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
    const transition={duration:2,type:'string'}

    return (
        <>
            <h1 className='e-heading'>My Journey</h1>
            <div className="timeline">
                <div className='point-odd'></div>
                <motion.div
                    className="container left-container"
                    whileInView={{left:'-5rem'}}
                    initial={{left:'55%'}}
                    transition={transition}
                    
                >
                    <div className="text-box">
                        <h2>B.Tech</h2>
                        <small>Computer Science and Technology</small>
                        <p>8.2 cgpa</p>
                        <p>NIST, Berhampur</p>
                        <small>2019-2023</small>
                    </div>
                </motion.div>
                <div className='point-even'></div>
                <motion.div
                    className="container right-container"
                    whileInView={{left:'55%'}}
                    initial={{left:'-25%'}}
                    transition={transition}
                >
                    <div className="text-box">
                        <h2>12th</h2>
                        <small>Computer Science and Technology</small>
                        <p>8.2 cgpa</p>
                        <p>NIST, Berhampur</p>
                        <small>2019-2023</small>
                    </div>
                </motion.div>
                <div className='point-odd'></div>
                <motion.div
                    className="container left-container"
                    whileInView={{left:'-5rem'}}
                    initial={{left:'55%'}}
                    transition={transition}
                >
                    <div className="text-box">
                        <h2>10th</h2>
                        <small>Computer Science and Technology</small>
                        <p>8.2 cgpa</p>
                        <p>NIST, Berhampur</p>
                        <small>2019-2023</small>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Experience;
