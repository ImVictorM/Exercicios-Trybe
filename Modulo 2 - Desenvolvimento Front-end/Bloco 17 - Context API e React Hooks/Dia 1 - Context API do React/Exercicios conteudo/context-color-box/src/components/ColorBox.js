import React from 'react';
import '../styles/box.css';
import ChangeColor from '../context/ChangeColor';
class ColorBox extends React.Component {
  render() {
    return(
      <ChangeColor.Consumer>
        {
          value => (
            <button
              type="button"
              className="box"
              style={ { backgroundColor: value.color } }
              onClick={ value.handleColorChange }
            >
              Click me to change my color!
            </button>
          ) 
        }
        
      </ChangeColor.Consumer>
    )
  }
}
export default ColorBox;