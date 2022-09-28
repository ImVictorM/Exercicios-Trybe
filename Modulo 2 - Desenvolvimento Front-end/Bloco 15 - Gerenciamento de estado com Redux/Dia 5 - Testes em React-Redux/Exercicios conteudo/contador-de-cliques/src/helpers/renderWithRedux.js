import clickReducer from '../reducers'
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';

const renderWithRedux = (
  component,
  {
    initialState, 
    store = createStore(
      combineReducers({ clickReducer }), 
      initialState
      ),
  } = {}
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

export default renderWithRedux;