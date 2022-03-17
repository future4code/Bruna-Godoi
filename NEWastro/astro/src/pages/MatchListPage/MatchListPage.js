import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import MatchListItem from '../../components/MatchListItem/MatchListItem';
import ResetButton from '../../components/ResetButton/ResetButton';
import { BASE_URL } from '../../constants/urls';
import { DivItem, HeartImg, ListDiv, P, ScreenContainer } from './styled';
import heart from '../../assets/heart.png';

const MatchListPage = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + 'matches').then((response) => {
      setMatches(response.data.matches);
    });
  }, []);

  return (
    <>
      <ScreenContainer>
        <AppBar />

        {matches.length != [] ? (
          <ListDiv>
            {matches.map((match) => {
              return <MatchListItem match={match} />;
            })}
          </ListDiv>
        ) : (
          <DivItem>
            <HeartImg src={heart} />
            <strong>
              <P>0 MATCHES</P>
            </strong>
          </DivItem>
        )}
      </ScreenContainer>
      <ResetButton />
    </>
  );
};

export default MatchListPage;
