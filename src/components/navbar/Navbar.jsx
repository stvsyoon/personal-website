import React from 'react'
import './navbar.css'
import {AiOutlineHome, AiOutlineCamera, AiOutlinePhone} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {BsBriefcase} from 'react-icons/bs'
import {IoSchoolOutline} from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><IoIosContact/></a>
      <a href="#experience"><BsBriefcase/></a>
      <a href="#education"><IoSchoolOutline/></a>
      <a href="#photography"><AiOutlineCamera/></a>
      <a href="#contact"><AiOutlinePhone/></a>
    </nav>
  )
}

export default Navbar