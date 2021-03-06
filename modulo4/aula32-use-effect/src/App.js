import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard/PokeCard';
import axios from 'axios';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState('');

  const api = async () => {
    await axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(({ data }) => {
        setPokeList(data.results);
      });
  };

  useEffect(() => {
    api();
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={''}>Nenhum</option>

        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
