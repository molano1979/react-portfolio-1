import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cardiac.png'
import IMG2 from '../../assets/workday.png'
import IMG3 from '../../assets/note.png'

function Portfolio() {
  return (
    <section id='portfolio'>Portfolio>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG1} alt="cardiac-arrest"/>
        </div>
        <h3>Cardiac Arrest</h3>
        <a href="https://github.com/molano1979/Cardiac-Arrest" className='btn'>Github</a>
        <a href="https://floating-temple-42927.herokuapp.com/login" className='btn btn-primary' target='_blank'>Live Demo</a>


      </article>

    </div>
    </section>
  )
}

export default Portfolio