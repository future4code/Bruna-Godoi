import React from 'react';
import { Bio, CardContainer, ImgProfile } from './styled';

const ProfileCard = (props) => {
  return (
    <CardContainer>
      <ImgProfile src={props.profile.photo} alt="" />
      <Bio>
        {props.profile.name}, {props.profile.age}
      </Bio>
      <Bio>{props.profile.bio}</Bio>
    </CardContainer>
  );
};

export default ProfileCard;
