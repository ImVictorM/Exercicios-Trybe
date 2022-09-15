import React, { Component } from 'react';
import Person from './components/Person';
import './App.css';

class App extends Component {
  state = {
    person: {},
    loading: true,
    error: null,
  };

  componentDidMount() {
    console.log('did mount')
    this.fetchPerson(); 
  }

  // shouldComponentUpdate() {
  //   // const { loading } = this.state
  //   // return loading;
  //   const { person } = this.state;
  //   return Object.keys(person).length !== 0
  // }

  fetchPerson = async () => {
    console.log('function')
    try {
      const endpoint = 'https://api.randomuser.me/';
      const response = await fetch(endpoint);
      const { results } = await response.json();
      this.setState({
        person: { ...results[0] },
        loading: false,
      });
    } catch (error) {
      error.message = 'Deu ruim';
      this.setState({error: error.message})
    }
  }

  render() {
    console.log('render')
    const { loading, person } = this.state;
    return (
      <div>
        {/* { Object.keys(person).length !== 0 && <Person { ...person } />} */}
        { loading 
            ? <div>Carregando</div>
            : <Person { ...person } /> 
        }
      </div>
    );
  }
}

export default App;
