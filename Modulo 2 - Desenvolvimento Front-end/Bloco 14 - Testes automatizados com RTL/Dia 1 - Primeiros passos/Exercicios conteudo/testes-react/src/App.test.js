import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se não aparece a mensagem caso o email ainda não tenha sido enviado.', () => {
  render(<App/>)
  const message = screen.queryByRole('heading', {level: 3})
  expect(message).not.toBeInTheDocument();
})

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';
  const sendButton = screen.getByTestId('id-send');
  userEvent.click(sendButton);
  const textEmail = screen.getByTestId("id-email-user");
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Muda a cor para verde quando o email é valido', () => {
  render(<App/>)
  const EMAIL_USER = 'email@email.com';
  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toBeInTheDocument();

  userEvent.type(emailInput, EMAIL_USER);

  const sendButton = screen.getByTestId('id-send');
  userEvent.click(sendButton);

  const message = screen.getByRole('heading', {
    level: 3, 
    name: /email válido/i
  });

  expect(message).toBeInTheDocument();
  expect(message.className).toBe('valid')
})

test('Muda a cor para vermelho quando o email é invalido', () => {
  render(<App/>)
  const EMAIL_USER = 'xableu';
  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toBeInTheDocument();

  userEvent.type(emailInput, EMAIL_USER);

  const sendButton = screen.getByTestId('id-send');
  userEvent.click(sendButton);

  const message = screen.getByRole('heading', {
    level: 3, 
    name: /email inválido/i
  });

  expect(message).toBeInTheDocument();
  expect(message.className).toBe('not_valid')
})

