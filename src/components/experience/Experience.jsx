import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context'
import { useContext } from 'react';



const Experience = () => {

    const theme = useContext(themeContext)

    const darkmode = theme.state.darkmode;


    const transition = {
        initial: { y: '5%', scale: 0.8, opacity: 0 },
        // animate:{}
    }

    return (
        <div id='Experience'>
            <h1 className='e-heading'>My Journey</h1>
            <div className="timeline" >
                <motion.div
                    className="container "
                    initial="initial"

                    whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
                    variants={transition}
                >
                    <div className="text-box">
                        <h2>Hyscaler</h2>
                        
                        <p>Software Developer Trainee</p>
                        <p>Bhubaneswar,Odisha</p>
                        <small>Html, Css, JavaScript,ReactJs,GitHub</small>
                    </div>
                </motion.div>
                <motion.div className="container "
                    initial="initial"

                    whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
                    variants={transition}>
                    <div className="text-box">
                        <h2>B.Tech</h2>
                        <small>Computer Science and Technology</small>
                        <p>8.2 cgpa</p>
                        <p>NIST, Berhampur</p>
                        <small>2019-2023</small>
                    </div>
                </motion.div>

                <motion.div
                    className="container"
                    initial="initial"

                    whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
                    variants={transition}

                >
                    <div className="text-box">
                        <h2>Intermediate</h2>
                        {/* <small>Intermediate</small> */}
                        <p>50%</p>
                        <p>Chikiti Mahavidalaya, Chikiti</p>
                        <small>2017-2019</small>
                    </div>
                </motion.div>
                <motion.div
                    className="container "
                    initial="initial"

                    whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
                    variants={transition}
                >
                    <div className="text-box">
                        <h2>Mactriculation</h2>
                        {/* <small>Computer Science and Technology</small> */}
                        <p>68.5%</p>
                        <p>UtkalMani High School, Madhabandha</p>
                        <small>2017</small>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Experience;
