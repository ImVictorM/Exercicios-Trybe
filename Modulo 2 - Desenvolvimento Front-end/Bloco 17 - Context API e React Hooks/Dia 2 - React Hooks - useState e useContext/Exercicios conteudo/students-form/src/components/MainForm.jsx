import React, { useState } from 'react';

function MainForm() {
  const [studentInfo, setStudentInfo ] = useState({
    name: '',
    age: '',
    city: '',
    module: '',
  });
  const { name, age, city } = studentInfo;

  const handleChange = ({ target: { name, value }}) => {
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    })
  }
  return (
    <form>
      <label htmlFor="name">
        Nome completo
        <input
          value={ name }
          id="name"
          type="text"
          onChange={ handleChange }
          name="name"
        />
      </label>

      <label htmlFor="age">
        Idade
        <input
          onChange={ handleChange }
          name="age"
          value={ age }
          type="number" 
          id="age" 
        />
      </label>

      <label htmlFor="city">
        Cidade
        <input
          value={ city }
          id="city"
          type="text"
          onChange={ handleChange }
          name="city"
        />
      </label>
      <section>
        <h2>Modulo</h2>
        
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            value="Fundamentos"
            type="radio" 
            name="module" 
            id="fundamentals" 
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="front-end">
          Front-end
          <input
            value="Front-end"
            type="radio"
            name="module"
            id="front-end"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="back-end">
          Back-end
          <input
            value="Back-end"
            type="radio"
            name="module"
            id="back-end"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cs">
          Ciência da computação
          <input
            value="Ciência da computação"
            type="radio"
            name="module"
            id="cs"
            onChange={ handleChange }
          />
        </label>
    
      </section>
      <button type="button">Submeter</button>
    </form>
  )
}

export default MainForm;