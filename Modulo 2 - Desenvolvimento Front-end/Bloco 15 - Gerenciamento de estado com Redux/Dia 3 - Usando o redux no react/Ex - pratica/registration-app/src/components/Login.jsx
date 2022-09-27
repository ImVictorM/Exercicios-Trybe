import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions';

class Login extends Component {
  
  state = {
    email: '',
    password: '',
  };

  handleChangle = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  signIn = () => {
    const { dispatch, history } = this.props;
    dispatch(logIn());
    history.push('/customers');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login page</h1>
        <label htmlFor="email">
          Email
          <input
            value={ email }
            type="email"
            name="email"
            id="email"
            onChange={ this.handleChangle }
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            value={ password }
            type="password"
            name="password"
            id="password"
            onChange={ this.handleChangle }
          />
        </label>
        <button type="button" onClick={ this.signIn }>Sign in</button>
      </div>
    );
  }
}

export default connect()(Login);