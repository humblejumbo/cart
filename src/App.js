import React, { Component } from 'react';
import CartItem from './CartItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cart</h1>
        <CartItem />
      </div>
    );
  }
}

export default App;
