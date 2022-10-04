import React from 'react';
import {CartWidget} from './Cartwidget';
import {NavBar} from './Navbar';
import {Logo} from './Logo';
import './NavBar.css';


export function Header () {
  return (
    <header className='cabeza'>
      <Logo /> 
      <NavBar />
      <CartWidget />
    </header>
  )
}
