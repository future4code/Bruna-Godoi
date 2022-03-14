import React from 'react';
import no from '../../assets/no.png';
import yes from '../../assets/yes.png';

import { ButtonDiv, ImgChoose } from './styled';

const ChooseButton = (props) => {
  return (
    <ButtonDiv>
      <ImgChoose src={no} onClick={props.clickNo} />
      <ImgChoose src={yes} onClick={props.clickYes} />
    </ButtonDiv>
  );
};

export default ChooseButton;
