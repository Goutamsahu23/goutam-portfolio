import React from 'react';
import './Intro.css';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import Vector1 from '../../assets/Vector1.png';
import Vector2 from '../../assets/Vector2.png';
import { motion } from 'framer-motion';

const Intro = () => {
    const nameVariants = {
        initial: { x: '-100%', scale: 0.5, opacity: 0 },
        animate: { x: 0, scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 15 } }
    };

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <motion.span
                        initial="initial"
                        animate="animate"
                        variants={nameVariants}
                    >
                        Goutam Sahu
                    </motion.span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi modi labore rem
                        est voluptatem quam expedita enim quo! Fugit, earum.
                    </span>
                </div>
                <button className='i-button button'>Hire Me</button>
                <div className="social-icons">
                    <BsGithub />
                    <BsLinkedin />
                    <BsInstagram />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
            </div>

            <div className='blur' style={{ background: "rgb(238, 210, 255)" }}></div>
        </div>
    )
}

export default Intro;
