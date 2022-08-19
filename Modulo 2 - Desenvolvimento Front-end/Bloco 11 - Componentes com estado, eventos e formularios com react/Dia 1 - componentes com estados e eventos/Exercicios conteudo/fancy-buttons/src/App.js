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

  pastelLaranja() {
    console.log('pastel de laranja');
    const { contagemLaranja } = this.state;
    this.setState((estadoInicial, _props) => {
      return  {
        contagemLaranja: estadoInicial.contagemLaranja + 1
      };
    });
    console.log(contagemLaranja);
  }

  pastelMorango() {
    console.log('pastel de morango');
    const { contagemMorango } = this.state;
    this.setState((estadoInicial, _props) => {
      return {
        contagemMorango: estadoInicial.contagemMorango + 1
      };
    });
    console.log(contagemMorango);
  }

  pastelUva() {
    console.log('pastel de uva');
    const { contagemUva } = this.state;
    this.setState((estadoInicial, _props) => {
      return {
        contagemUva: estadoInicial.contagemUva + 1
      };
    });
    console.log(contagemUva);
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
