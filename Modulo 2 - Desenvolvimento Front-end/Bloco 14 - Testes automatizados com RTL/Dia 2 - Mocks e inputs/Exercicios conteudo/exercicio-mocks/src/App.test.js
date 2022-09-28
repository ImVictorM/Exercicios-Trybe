import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  // cria objeto similar ao que é retornado pela api
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  // É por meio do objeto global que conseguimos usar qualquer função do sistema
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  // json: () => Promise.resolve(joke)}));

  // terceira forma
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));
  
  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

test("testes exercicio de fixação", async () => {
  jest.mock()
  const firstJoke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const secondJoke = {
    id: "R7UfaahVfFd",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(firstJoke),
  });

  // global.fetch = jest.fn().mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(firstJoke)
  // });

  render(<App/>);
  expect(await screen.findByText("Whiteboards ... are remarkable.")).toBeInTheDocument();
  expect(fetch).toBeCalledTimes(1);
  const button = screen.getByRole('button', {
    name: /New Joke/i
  });

  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(secondJoke),
  });


  userEvent.click(button);

  expect(await screen.findByText("My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.")).toBeInTheDocument();
  expect(screen.queryByText("Whiteboards ... are remarkable.")).not.toBeInTheDocument();
  expect(fetch).toBeCalledTimes(2);

});