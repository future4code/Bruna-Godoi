import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Head from './Head';
import { response } from 'express';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5px;
`;

function Match() {
  const [fotos, setFotos] = useState({});
  useEffect(() => {
    pegaFotos();
  }, [fotos]);
  const pegaFotos = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:godoi/person`
      )
      .then((response) => {
        setFotos(response.data);
      })
      .catch((error) => {});
  };
  return (
    <Box>
      <Head />
    </Box>
  );
}
export default Match;
