import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.pastelLaranja = this.pastelLaranja.bind(this);
    this.pastelMorango = this.pastelMorango.bind(this);
    this.pastelUva = this.pastelUva.bind(this);

    this.state = {
      contagemUva: 0,
      contagemLaranja: 0,
      contagemMorango: 0,
    }
  }

  checkEven = (number, target) => {
    if (number % 2 === 0) {
      target.style.backgroundColor = 'lime'
    } else {
      target.style.backgroundColor = 'white'
    }
  }

  pastelLaranja(event) {
    const { target } = event;
    this.setState(
      {
        contagemLaranja: this.state.contagemLaranja + 1
      },
      () => {
        const { contagemLaranja } = this.state;
        this.checkEven(contagemLaranja, target)
        console.log(contagemLaranja)
        console.log(target.style.backgroundColor);
      }
    );
  }

  pastelMorango(event) {
    const { target } = event;
    this.setState(
      {
        contagemMorango: this.state.contagemMorango + 1
      },
      () => {
        const { contagemMorango } = this.state;
        this.checkEven(contagemMorango, target)
        console.log(contagemMorango)
        console.log(target.style.backgroundColor);
      }
    );
  }

  pastelUva(event) {
    const { target } = event;
    this.setState(
      {
        contagemUva: this.state.contagemUva + 1
      },
      () => {
        const { contagemUva } = this.state;
        this.checkEven(contagemUva, target)
        console.log(contagemUva)
        console.log(target.style.backgroundColor);
      }
    );
  }
  render() {
    return (
      <section>
        <button onClick={this.pastelUva}>Uva</button>
        <button onClick={this.pastelLaranja}>Laranja</button>
        <button onClick={this.pastelMorango}>Morango</button>
      </section>
    );
  }
}

export default App;
