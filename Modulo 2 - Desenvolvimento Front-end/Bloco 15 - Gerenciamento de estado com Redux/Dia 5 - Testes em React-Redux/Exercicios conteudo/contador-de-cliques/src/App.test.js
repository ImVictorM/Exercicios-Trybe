import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in the button should increment the value of clicks', () => {
    // muda valor inicial do counter para 5
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('a click with the default value should increment the value in 1', () => {
    renderWithRedux(<App/>);

    expect(screen.getByText('0')).toBeInTheDocument();
    const addButton = screen.getByRole('button', {
      name: /clique aqui/i,
    });
    userEvent.click(addButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('change default value to ten then click the button', () => {
    renderWithRedux(<App/>, {
      initialState: { clickReducer: { counter: 10}}
    });
    expect(screen.getByText('10')).toBeInTheDocument();
    const addButton = screen.getByRole('button', {
      name: /clique aqui/i,
    });
    userEvent.click(addButton);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});

