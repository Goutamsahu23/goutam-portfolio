import React from 'react';
import './Intro.css';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import Vector1 from '../../assets/Vector1.png';
import Vector2 from '../../assets/Vector2.png';
import { motion} from 'framer-motion';

const Intro = () => {
    const transition={
        initial:{y:'5%',scale:0.8,opacity:0},
        // animate:{}
      }


    return (
        <motion.div className="intro"
        initial="initial"
    
    whileInView={{y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 }}}
    variants={transition}>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>
                        Goutam Sahu
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero molestiae hic rem expedita commodi maxime dolor tempora quisquam itaque molestias excepturi laboriosam eveniet numquam, ullam repellendus, magnam quae consectetur omnis reiciendis ut tempore officia nobis eos aperiam! Facilis vel, nesciunt mollitia dolor, obcaecati quisquam expedita sunt accusantium corrupti 
                        reprehenderit impedit debitis dolore at sed aliquam corporis repellat. Incidunt, aperiam ullam.
                    </span>
                </div>
                <button className='i-button button'>Hire Me</button>
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
