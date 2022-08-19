import './App.css';
import React, { Component } from 'react';

function pastelUva() {
  console.log('pastel de uva');
}

function pastelMorango() {
  console.log('pastel de morango');
}

function pastelLaranja() {
  console.log('pastel de laranja');
}

class App extends Component {
  render() {
    return (
      <section>
        <button onClick={pastelUva}>Click</button>
        <button onClick={pastelLaranja}>Click</button>
        <button onClick={pastelMorango}>Click</button>
      </section>
    );
  }
}

export default App;
