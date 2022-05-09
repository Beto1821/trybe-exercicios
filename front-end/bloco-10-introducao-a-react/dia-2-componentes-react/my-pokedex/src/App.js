
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      {pokemons.map((item)=> {
        return <Pokemon pokemon={item} key={item.id}/>
      })}
      {/* <Pokemon pokemon= {pokemons[4]}/> */}
    </div>
  );
}

export default App;
