import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      buttonTriggered: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }
 
  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '', buttonTriggered: true });
  }
  render() {
    const { email, saveEmail, buttonTriggered } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        {
          buttonTriggered  && <ValidEmail email={ saveEmail } />
        }
        
      </div>
    );
  }
 
}

export default App;
