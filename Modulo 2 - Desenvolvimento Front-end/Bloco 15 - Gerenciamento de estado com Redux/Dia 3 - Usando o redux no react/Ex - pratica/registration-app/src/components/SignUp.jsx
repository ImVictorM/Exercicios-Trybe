import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../redux/actions';
import { Link } from 'react-router-dom';

class SignUp extends Component {

  state = {
    name: '',
    age: '',
    email: '',
  };

  handleChangle = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  signUp = () => {
    const { dispatch } = this.props;
    dispatch(saveUser({ ...this.state }));
  }

  render() {
    const { login } = this.props;
    const { name, age, email } = this.state;
    return (
      <div>
        <h1>Sign up</h1>
        {
          !login ? <p>Login não efetuado</p> : (
            <section>
              <form>
                <label htmlFor="name">
                  Name:
                  <input
                    id="name"
                    value={ name }
                    type="text"
                    name="name"
                    onChange={ this.handleChangle }
                  />
                </label>

                <label htmlFor="age">
                  Age:
                  <input
                    type="number" 
                    name="age" 
                    id="age"
                    value={ age }
                    onChange={ this.handleChangle }
                  />
                </label>

                <label htmlFor="email">
                  Email:
                  <input
                    type="email" 
                    name="email" 
                    id="email"
                    value={ email }
                    onChange={ this.handleChangle }
                  />
                </label>
                <button
                  type="button"
                  onClick={ this.signUp }
                >
                  Register
        
                </button>
              </form>
              <Link to="/customers">Customers</Link>
            </section>
          )
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.loginReducer.login,
  }
}

export default connect(mapStateToProps)(SignUp);