import React, { useState } from 'react';
import CharacterDetailPage from '../DetalheDePersonagens/CharacterDetailPage';
import ItensDaLista from './ItensDaLista';

function CharacterListPage() {
  return (
    <div>
      <h1>Lista de Personagens</h1>
      <ItensDaLista />
      <ItensDaLista />
      <ItensDaLista />
      <ItensDaLista />
      <ItensDaLista />
      <button>Vai para os detalhes</button>
    </div>
  );
}

export default CharacterListPage;
