import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cardiac.png'
import IMG2 from '../../assets/workday.png'
import IMG3 from '../../assets/note.png'

function Portfolio() {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
     
     {/*cardiac arrest*/}
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG1} alt="cardiac"/>
        </div>
        <h3>Cardiac Arrest</h3>
        <a href="https://github.com/molano1979/Cardiac-Arrest" className='btn' target='_blank'>Github</a>
        <a href="https://floating-temple-42927.herokuapp.com/login" className='btn btn-primary' target='_blank'>Live Demo</a>


      </article>

 {/*wordayscheduler*/}
<article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG2} alt="workday"/>
        </div>
        <h3>Work Day Scheduler</h3>
        <a href="https://github.com/molano1979/Work-Day-Scheduler" className='btn' target='_blank'>Github</a>
        <a href="https://molano1979.github.io/Work-Day-Scheduler/" className='btn btn-primary' target='_blank'>Live Demo</a>


      </article>

 {/*note taker*/}
  <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG3} alt="notes"/>
        </div>
        <h3>Note Taker</h3>
        <a href="https://github.com/molano1979/note-taker" className='btn' target='_blank'>Github</a>
        <a href="https://mysterious-spire-09295.herokuapp.com/notes" className='btn btn-primary' target='_blank'>Live Demo</a>


      </article>

    </div>
    </section>
  )
}

export default Portfolio