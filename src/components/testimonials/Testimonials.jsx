import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
<h5>Reviews from clients</h5>
<h2>Testimonials</h2>

<div className="container testimonials_container">
  <article className="testimonial">
    <div className="client_avitar">
      <img src={AVTR1} alt="Avatar One" />
      <h5 className='client_name'>Ernest Achiever</h5>
      <small className='client_review'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas, eum debitis modi ad commodi dolorem error et fuga facere quam omnis consequuntur, hic animi placeat alias ab? Consequuntur, aperiam?
      </small>
    </div>
  </article>

  <article className="testimonial">
    <div className="client_avitar">
      <img src={AVTR2} alt="Avatar One" />
      <h5 className='client_name'>Ernest Achiever</h5>
      <small className='client_review'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas, eum debitis modi ad commodi dolorem error et fuga facere quam omnis consequuntur, hic animi placeat alias ab? Consequuntur, aperiam?
      </small>
    </div>
  </article>

  <article className="testimonial">
    <div className="client_avitar">
      <img src={AVTR3} alt="Avatar One" />
      <h5 className='client_name'>Ernest Achiever</h5>
      <small className='client_review'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas, eum debitis modi ad commodi dolorem error et fuga facere quam omnis consequuntur, hic animi placeat alias ab? Consequuntur, aperiam?
      </small>
    </div>
  </article>

  <article className="testimonial">
    <div className="client_avitar">
      <img src={AVTR4} alt="Avatar One" />
      <h5 className='client_name'>Ernest Achiever</h5>
      <small className='client_review'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas, eum debitis modi ad commodi dolorem error et fuga facere quam omnis consequuntur, hic animi placeat alias ab? Consequuntur, aperiam?
      </small>
    </div>
  </article>

</div>

    </section>
    
  )
}

export default Testimonials