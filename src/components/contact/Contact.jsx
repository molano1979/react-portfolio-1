import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>dmmolano@yahoo.com</h5>
            <a href="mailto:dmmolano@yahoo.com" target="_blank">Send a message</a>

          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea> 

        </form>

      </div>

    </section>
  )
}

export default Contact