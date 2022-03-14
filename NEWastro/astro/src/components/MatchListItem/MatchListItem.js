import React from 'react';
import { AvatarImg, ItemDiv } from './styled';

const MatchListItem = (props) => {
  return (
    <ItemDiv>
      <AvatarImg src={props.match.photo} alt="" />
      <p>{props.match.name}</p>
    </ItemDiv>
  );
};

export default MatchListItem;
