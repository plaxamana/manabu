import React from 'react'
import Logo from '../assets/logo/mascot.svg'

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt="logo" style={{ marginRight: '.25em'}}/>
        <p>Manabu</p>
      </div>
    </header>
  )
}