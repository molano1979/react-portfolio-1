import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/diana-cady-8a8a0135" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/molano1979" target="_blank"><GoMarkGithub/></a>
    
    </div>
  )
}

export default HeaderSocials