import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FiBriefcase} from 'react-icons/fi'
import {BiMessageSquareDetail} from 'react-icons/bi'


function Nav() {
  return (
    <nav>
      <a href="#"
      className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><FiBriefcase/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav