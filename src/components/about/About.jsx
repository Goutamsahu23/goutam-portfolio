import React from 'react'
import './About.css'
import aboutme from '../../assets/aboutme.jpg'
import { animate, motion } from 'framer-motion'
const About = () => {
  const transition={
    initial:{y:'5%',scale:0.5,opacity:0},
    animate:{y: 0, scale: 1, opacity: 1, transition: { ease: "easeInOut", duration: 2 }}
  }
  return (
    <motion.div className="about"
    initial="initial"
    animate="animate"
    whileInView={{animate}}
    variants={transition}
    >
        <div className="a-left">
            <img src={aboutme} alt='aboutme' height={600} width={600}/>
        </div>
        <div className="a-right">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Explicabo molestiae vero a ad laborum. Cumque neque commodi aperiam impedit libero,
                  laudantium voluptatibus tempora voluptates ad sapiente quos adipisci placeat, vel ullam.
                   Adipisci nihil soluta nostrum hic officiis itaque,
                 ipsa ut vero veniam asperiores. Adipisci omnis perferendis facere sed suscipit voluptates.
            </p>
            <p>Name : Goutam Sahu</p>
            <p>Date-of-birth : 23-11-2001</p>
            <p>Email : goutamsahu602@gmail.com</p>
            <p>Linkedin : linkedin.com</p>
            <p>Github : github.com</p>
            <p>Contact no : +91 9078774040</p>
            <button className='button about-btn'>Download CV</button>
        </div>
    </motion.div>
  )
}

export default About
