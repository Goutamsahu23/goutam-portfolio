import React from 'react'
import './About.css'
import aboutme from '../../assets/aboutme.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
const About = () => {
  const transition = {
    initial: { y: '5%', scale: 0.8, opacity: 0 },
    // animate:{}
  }
  return (
    <motion.div className="about" id='About'
      initial="initial"

      whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
      variants={transition}
    >
      <div className="a-left">
        <img src={aboutme} alt='aboutme' height={600} width={600} />
      </div>
      <div className="a-right">
        <h1>About Me</h1>
        <p>Hello! I'm Goutam Sahu, a dedicated and innovative web developer passionate about creating meaningful
          digital experiences. I embarked on my journey in the world of technology at the prestigious NIST,
          where I completed my Bachelor's degree in Computer Science and Engineering in 2023.
          My educational background equipped me with a solid foundation in computer science
          , but it was my curiosity and enthusiasm that led me to specialize in web development.
          I immersed myself in the realms of HTML, CSS, and JavaScript, honing my skills to craft elegant and responsive websites.
          Venturing further, I delved into the world of React.js,
          mastering the art of building dynamic and interactive user interfaces.
        </p>
        <p>Name : Goutam Sahu</p>
        <p>Date-of-birth : 23-11-2001</p>
        <p>Email : goutamsahu602@gmail.com</p>
        <p>Linkedin : goutam-sahu-247579210</p>
        <p>Github : Goutamsahu23</p>
        <p>Contact no : +91 9078774040</p>
        <Link spy={true} to='Contacts' smooth={true} activeClass='active'>
          <button className='button about-btn'>Contact Me</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default About
