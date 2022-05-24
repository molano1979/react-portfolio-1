import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/diana-cady-8a8a0135" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/molano1979" target="_blank"><FaGithub/></a>
       
    </div>
  )
}

export default HeaderSocials