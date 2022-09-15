import React, { Component } from 'react';

class Person extends Component {
  render() {
    const { email, picture, name, dob,  } = this.props;
    const { large } = picture;
    const { first, last, title } = name;
    const { age } = dob;

    return (
      <section>
        <img src={ large } alt="person" />
        <p>Nome: { `${title} ${first} ${last}` }</p>
        <p>Email: {email}</p>
        <p>Idade: {age}</p>
      </section>
    );
  }
}

export default Person;