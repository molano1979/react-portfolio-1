import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>Portfolio>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="portfolio_item-image"></div>
        <h3>Cardiac Arrest</h3>
        <a href="https://github.com/molano1979/Cardiac-Arrest" className='btn'>Github</a>

      </article>

    </div>
    </section>
  )
}

export default Portfolio