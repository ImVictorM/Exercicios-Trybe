import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.pastelLaranja = this.pastelLaranja.bind(this);
    this.pastelMorango = this.pastelMorango.bind(this);
    this.pastelUva = this.pastelUva.bind(this);
  }

  pastelLaranja() {
    console.log('pastel de laranja');
    console.log(this);
  }

  pastelMorango() {
    console.log('pastel de morango');
    console.log(this);
  }

  pastelUva() {
    console.log('pastel de uva');
    console.log(this);
  }
  render() {
    return (
      <section>
        <button onClick={this.pastelUva}>Click</button>
        <button onClick={this.pastelLaranja}>Click</button>
        <button onClick={this.pastelMorango}>Click</button>
      </section>
    );
  }
}

export default App;
