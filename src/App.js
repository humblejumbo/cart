import React, { Component } from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <h1>Cart</h1>
        <Cart />
      </div>
    );
  }
}

export default App;
