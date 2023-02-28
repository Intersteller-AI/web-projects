import { useState } from 'react'
import gsap from 'gsap'
import { close, logo, menu } from '../assets/assets'

import { navLinks } from '../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (

    <div className='navy flex items-center justify-between py-6 w-full text-white'>
      <img className='w-[124px] h-[32px]' src={logo} alt="logo" />
      <div className='sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((val, index) => (
          <div key={`${val.id}`} className={`font-poppins font-normal ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a className='opacity-90 transition-all duration-300 hover:opacity-100 hover:text-secondary' href={`#${val.id}`}>{val.title}</a>
          </div>
        ))
        }
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} flex-col items-center p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          {navLinks.map((val, index) => (
            <div key={`${val.id}`} className={`font-poppins font-normal ${index == navLinks.length - 1 ? 'mb-0' : 'mb-8'}`}>
              <a href={`#${val.id}`}>{val.title}</a>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}



export default Navbar
