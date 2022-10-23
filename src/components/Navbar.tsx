import React from 'react'
import { Logo } from './common/Logo'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo/>
      <nav className='navbar__navigation'>
        <a href="#" className='navbar__navigation-link'>Features</a>
        <a href="#"className='navbar__navigation-link'>Partners</a>
        <a href="#"className='navbar__navigation-link'>Stories</a>
      </nav>
      <button className='navbar__button'><span>Download for free</span></button>
      </div>
  )
}
