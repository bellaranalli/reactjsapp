import "./Cart.css"
import React, { Component } from 'react';
import logo from './cart.jpg';

class CartWidget extends Component {
  render() {
    return (
      <div className="Cart">
        <img src={logo} className="Cart"/>
      </div>
    );
  }
}

export default CartWidget;