import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  const compromissos = ['lavar louça', 'colocar comida para o cachorro', 'levar a vó no karate', 'comprar sabão'];
  return (
    compromissos.map((tarefa) => Task(tarefa))
  );
}

export default App;
