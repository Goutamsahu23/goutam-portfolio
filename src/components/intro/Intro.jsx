import React from 'react';
import './Intro.css';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

import { motion } from 'framer-motion';
import goutam from '../../assets/goutam.pdf';


const Intro = () => {
    const transition = {
        initial: { y: '5%', scale: 0.8, opacity: 0 },
        // animate:{}
    }


    return (
        <motion.div className="intro" id='intro'
            initial="initial"

            whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
            variants={transition}>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>
                        Goutam Sahu
                    </span>
                    <span>
                        Hello there! 👋 I am Goutam Sahu, a passionate and skilled web developer with a strong foundation in computer science.
                        I recently graduated with a degree in Computer Science and Engineering from NIST in 2023. My expertise lies in front-end technologies like
                        HTML, CSS, JavaScript, and React.js, where I craft intuitive and responsive user interfaces.
                        I am also well-versed in backend development using MongoDB, ensuring seamless and dynamic user experiences.
                    </span>
                </div>
                <a href={goutam} download>
                    <button className='i-button button'>Download CV</button>
                </a>
                <div className="social-icons">
                    <a href='https://github.com/Goutamsahu23' target='_blank'><BsGithub /></a>
                    <a href='https://www.linkedin.com/in/goutam-sahu-247579210/' target='_blank'><BsLinkedin /></a>
                    <a href='https://www.instagram.com/_mr_goutam23_/' target='_blank'> <BsInstagram /></a>
                </div>
            </div>
        </motion.div>
    );
};

export default Intro;
