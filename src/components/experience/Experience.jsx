import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      
      
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience-details'></article>
            <BsPatchCheckFill />


          </div>

        </div>
        <div className="experience_backend">

        </div>
      
      </div>
      </section>
 

  )
}

export default Experience