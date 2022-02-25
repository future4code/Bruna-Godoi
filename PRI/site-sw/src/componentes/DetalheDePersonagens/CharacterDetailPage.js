import React from 'react';
import styled from 'styled-components';

function CharacterDetailPage(props) {
  return (
    <div>
      <h1>Detalhes do Personagem</h1>
      <p>Nome:</p>
      <p>Planeta de Origem:</p>
      <button onClick={() => props.setSelectPage('page-list')}>
        Voltar para Lista
      </button>
    </div>
  );
}

export default CharacterDetailPage;
