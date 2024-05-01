import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <>
        <header>
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navitem">About</li>
                    <li className="navitem"><img src={logo} alt=""/></li>
                    <li className="navitem">Login</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar