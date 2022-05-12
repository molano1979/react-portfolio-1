import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small></small>

            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6 months</small>

            </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About