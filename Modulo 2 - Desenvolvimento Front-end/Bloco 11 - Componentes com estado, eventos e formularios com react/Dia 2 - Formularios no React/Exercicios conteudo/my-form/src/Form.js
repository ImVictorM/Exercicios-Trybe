import React, { Component } from "react";
import Input from "./components/Input";
import Textarea from "./components/Textarea";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      comidaFavorita: 'Pizza',
      comentario: '',
      check: false,
      formularioComErros: false,
    }
  }

  changeHandler = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="main-form">
        <legend>Formulário com react</legend>
        <fieldset>
          <Input
            type="text"
            id="nome"
            value={this.state.nome}
            action={this.changeHandler}
            name="nome"
          />

          <Input
            type={10}
            id="email"
            name="email"
            value={this.state.email}
            action={this.changeHandler}
          />

          <label htmlFor="comidas">
            Comida favorita:
            <select
              id="comidas"
              name="comidaFavorita"
              value={this.state.comidaFavorita}
              onChange={this.changeHandler}
            >
              <option>Pizza</option>
              <option>Esfiha</option>
              <option>Hamburguer</option>
              <option>Salada</option>
            </select>
          </label>

          <Textarea
            id="comentario"
            name="comentario"
            value={this.state.comentario}
            action={this.changeHandler}
          />

          <Input
            type="file"
            name="arquivo"
          />

          <Input
            type="checkbox"
            name="check"
            id="check"
            value={this.state.check}
            action={this.changeHandler}
          >
          </Input>

        </fieldset>
      </form>
    )
  }
}

export default Form;