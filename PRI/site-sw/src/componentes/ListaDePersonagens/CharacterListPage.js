import React, { useState, useEffect } from 'react';
import CharacterDetailPage from '../DetalheDePersonagens/CharacterDetailPage';
import ItensDaLista from './ItensDaLista';
import axios from 'axios';

function CharacterListPage(props) {
  const baseURL = 'https://swapi.py4e.com/api/';
  const [personagens, setPersonagens] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL + 'people/')
      .then((response) => {
        setPersonagens(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(personagens);
  return (
    <div>
      <h1>Lista de Personagens</h1>

      {personagens.length &&
        personagens.map((personagem) => {
          return (
            <button onClick={() => props.setSelectPage('detail-page')}>
              <ItensDaLista nomePersonagem={personagem.name} />
            </button>
          );
        })}
    </div>
  );
}

export default CharacterListPage;
