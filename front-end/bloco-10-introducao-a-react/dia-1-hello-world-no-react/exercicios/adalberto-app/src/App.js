import './App.css';

const compromissos = ['item1', 'item2', 'item3' ]

function App() {
  return (compromissos.map(Task));
}

const Task = (value) => {
  return (
    <li className='items'>{value}</li>
  );
}

export default App;
