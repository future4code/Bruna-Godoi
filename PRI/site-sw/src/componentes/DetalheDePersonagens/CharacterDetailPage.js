import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CharacterDetailPage(props) {
  const baseURL = 'https://swapi.py4e.com/api/';
  const [detail, setDetail] = useState({});
  const [planeta, setPlaneta] = useState({});

  useEffect(() => {
    axios
      .get(baseURL + 'people/')
      .then((res) => {
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    axios
      .get(baseURL + 'planets/')
      .then((response) => {
        setPlaneta(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1> DETALHE PERSONAGEM</h1>
      {detail.name && planeta.name ? (
        <div>
          <p>{detail.name}</p>
          <p>{planeta.name}</p>
        </div>
      ) : (
        <p>carregando...</p>
      )}
      <button onClick={() => props.setSelectPage('page-list')}>
        Voltar para Lista
      </button>
    </div>
  );
}
export default CharacterDetailPage;
