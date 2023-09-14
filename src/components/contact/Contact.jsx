import React from 'react'
import './Contact.css'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
const contact = () => {
    return (
        <div className="contact">
            <h1>Get in Touch</h1>
            <div className="top-side">
                <div className='t-d-c'>
                    <div><span><BsTelephone/></span></div>
                    <h2>Contact Number</h2>
                    <p>+91 9078774040</p>
                </div>
                <div className='t-d-c'>
                    <div><span><MdOutlineMailOutline/></span></div>
                    <h2>Email</h2>
                    <p>goutamsahu602@gmail.com</p>
                </div>
                <div className='t-d-c'>
                    <div><span><AiOutlineLinkedin/></span></div>
                    <h2>LinkedIn</h2>
                    <p>linkedin.com</p>
                </div>
            </div>
            <div className="bottom-side">
                <form>
                    <input type='text' placeholder='name' />
                    <input type='email' placeholder='email' />
                    <textarea placeholder='Write your message.....'></textarea>
                    <button className='button s-btn'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default contact
