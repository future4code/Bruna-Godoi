import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerLista = styled.div`
  border: solid black 1px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  :hover {
    background-color: lightgray;
  }
`;

function ItensDaLista(props) {
  return (
    <ContainerLista>
      <p>{props.nomePersonagem}</p>
    </ContainerLista>
  );
}
export default ItensDaLista;
