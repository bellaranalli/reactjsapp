import React from 'react';
import {CartWidget} from './Cartwidget';
import {NavBar} from './NavBar';
import {Logo} from './Logo';


export function Header () {
  return (
    <header>
      <Logo /> 
      <NavBar />
      <CartWidget />
    </header>
  )
}
