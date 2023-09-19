import React,{useState} from 'react';
import './Contact.css'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();


    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });


    const transition = {
        initial: { y: '5%', scale: 0.8, opacity: 0 },
        // animate:{}
    }

    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cz03wrm', 'template_lsl3903', form.current, '8ZBQo_mFF_2M1zQzR')
      .then((result) => {
          toast.success("message send successfully.Thank you")
      }, (error) => {
          toast.error("error in sending message.")
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

    return (
        <motion.div className="contact" id='Contacts'
            initial="initial"

            whileInView={{ y: 0, scale: 1, opacity: 1, transition: { ease: "easeOut", duration: 1 } }}
            variants={transition}>
            <h1>Get in Touch</h1>
            <div className="top-side">
                <div className='t-d-c'>
                    <div><span><BsTelephone /></span></div>
                    <h2>Contact Number</h2>
                    <a href="tel:+1234567890" target='_blank'><p>+91 9078774040</p></a>
                </div>
                <div className='t-d-c'>
                    <div><span><MdOutlineMailOutline /></span></div>
                    <h2>Email</h2>
                    <a href='mailto:https://www.linkedin.com/in/goutam-sahu-247579210/' target='_blank'><p>goutamsahu602@gmail.com</p></a>
                </div>
                <div className='t-d-c'>
                    <div><span><AiOutlineLinkedin /></span></div>
                    <h2>LinkedIn</h2>
                    <a href='https://www.linkedin.com/in/goutam-sahu-247579210/' target='_blank'><p>goutam-sahu-247579210</p></a>
                </div>
            </div>
            <div className="bottom-side">
                <form ref={form} onSubmit={sendEmail}>
    
                    <input type="text" name="user_name" placeholder='name'  value={formData.user_name} onChange={handleChange} />
        
                    <input type="email" name="user_email"placeholder='email' value={formData.user_email} onChange={handleChange} />
                
                    <textarea name="message" placeholder='write your message....' value={formData.message} onChange={handleChange}/>
                    <button type="submit" className='button s-btn'>Send</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact
