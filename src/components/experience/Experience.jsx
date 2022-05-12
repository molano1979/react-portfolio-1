import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>


      <div className="container experience_container">

      {/*frontend section*/}

        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>

            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>

            </article>
          
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Beginner</small>

            </article>
          </div>

        </div>
 
 {/*backend section*/}

        <div className="experience_backend">
        <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>

            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>

            </article>
          
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience-details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Beginner</small>

            </article>
          </div>


        </div>

      </div>
    </section>


  )
}

export default Experience