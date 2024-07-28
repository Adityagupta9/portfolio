import React from 'react'
import '../style/contact.css'
import { IoIosSend } from "react-icons/io";
function Contact() {
  return (
    <div id='Contact'>
        <div className='gap2'>
        hii
      </div>
      <p id='head3'>CONTACT ME</p>
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className='contact-form'>
        <h2> Connect with Me</h2>
            <div className="name-email">
            <input type="hidden" name="access_key" value="ed3ea435-fedb-40cc-b8e6-0eb5e29f0cd1"/>
                <input type="text" name='name'  placeholder= 'Your Name' className='contactinput' required/>
                <input type="email" name='email'  placeholder='Your Email' className='contactinput' required/>
            </div>
            <input type="text" name='subject' placeholder='Subject' className='contactinput' id="input-subject" autoComplete="off"/>
            <textarea name="message" placeholder="Message" className="contact-input" ></textarea>
            <button type='submit' className='contact-button'>Send <IoIosSend className='send-mail-icon'/></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
