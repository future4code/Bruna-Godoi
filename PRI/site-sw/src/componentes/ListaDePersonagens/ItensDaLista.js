import React from 'react';
import styled from 'styled-components';

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

function ItensDaLista() {
  return (
    <ContainerLista>
      <p>Personagens</p>
    </ContainerLista>
  );
}
export default ItensDaLista;
