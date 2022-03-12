import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <h1>Lista de Personagens</h1>

      {personagens.length &&
        personagens.map((personagem) => {
          return (
            <div onClick={() => props.setSelectPage('detail-page')}>
              <ItensDaLista
                onClick={() => props.setURLPersonagem(personagem.url)}
                nomePersonagem={personagem.name}
              />
            </div>
          );
        })}
    </div>
  );
}

export default CharacterListPage;
