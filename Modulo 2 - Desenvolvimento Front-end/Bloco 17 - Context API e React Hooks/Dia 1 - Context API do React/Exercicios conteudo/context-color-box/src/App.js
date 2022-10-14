import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import ChangeColor from './context/ChangeColor';
class App extends React.Component {
  state = {
    colorIndex: 0,
    colors: ['blue', 'red', 'yellow'],
  }
  handleColorChange = () => {
    this.setState((prevState) => {
      const {colorIndex, colors} = this.state;
      if (colorIndex < colors.length - 1) {
        return {
          colorIndex: prevState.colorIndex + 1,
        }
      }
      return {
        colorIndex: 0,
      }
    })
  }
  render() {
    const { colorIndex, colors} = this.state;
    const contextValue = {
      color: colors[colorIndex],
      handleColorChange: this.handleColorChange,
    }
    return (
      <ChangeColor.Provider value={contextValue}>
        <ColorBox />
      </ChangeColor.Provider>
    );
  }
}
export default App;
