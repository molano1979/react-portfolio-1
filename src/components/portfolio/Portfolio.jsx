import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/cardiac.png'
import IMG2 from '../../assets/workday.png'
import IMG3 from '../../assets/note.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Cardiac Arrest',
    github: 'https://github.com/molano1979/Cardiac-Arrest',
    demo: 'https://floating-temple-42927.herokuapp.com/login'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Worday Scheduler',
    github: 'https://github.com/molano1979/Work-Day-Scheduler',
    demo: 'https://molano1979.github.io/Work-Day-Scheduler/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Note Taker',
    github: 'https://github.com/molano1979/note-taker',
    demo: 'https://mysterious-spire-09295.herokuapp.com/notes'
  },

]



  const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
  
        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
              )
            })
          }
        </div>
      </section>
    )
  }
  
  export default Portfolio