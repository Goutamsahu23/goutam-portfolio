import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context'
import { useContext } from 'react';



const Experience = () => {

    const theme = useContext(themeContext)

    const darkmode = theme.state.darkmode;


    const transition={
        initial:{y:'5%',scale:0.8,opacity:0},
        // animate:{}
      }

    return (
        <div id='Experience'>
            <h1 className='e-heading'>My Journey</h1>
            <div className="timeline" >
                <div className='point-odd' style={{ display: darkmode ? 'none' : '' }}></div>
                <motion.div className="container "
                initial="initial"
    
                whileInView={{y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 }}}
                variants={transition}>
                    <div className="text-box">
                        <h2>B.Tech</h2>
                        <small>Computer Science and Technology</small>
                        <p>8.2 cgpa</p>
                        <p>NIST, Berhampur</p>
                        <small>2019-2023</small>
                    </div>
                </motion.div>
                <div className='point-even' style={{ display: darkmode ? 'none' : '' }}></div>
                <motion.div
                    className="container"
                    initial="initial"
    
    whileInView={{y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 }}}
    variants={transition}
                    
                >
                    <div className="text-box">
                        <h2>12th</h2>
                        <small>Computer Science and Technology</small>
                        <p>8.2 cgpa</p>
                        <p>NIST, Berhampur</p>
                        <small>2019-2023</small>
                    </div>
                </motion.div>
                <div className='point-odd' style={{ display: darkmode ? 'none' : '' }}></div>
                <motion.div
                    className="container "
                    initial="initial"
    
                    whileInView={{y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 }}}
                    variants={transition}                    
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
        </div>
    );
}

export default Experience;
