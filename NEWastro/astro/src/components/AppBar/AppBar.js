import React from 'react';
import logo from '../../assets/AstroMatch.png';
import { AppBarContainer, ButtonImg, LogoImage } from './styled';
import voltar from '../../assets/voltar.png';
import match from '../../assets/match.png';
import { goToMatchList, goToProfile } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
const AppBar = () => {
  const history = useHistory();
  return (
    <AppBarContainer>
      <ButtonImg onClick={() => goToProfile(history)} src={voltar} alt="" />
      <LogoImage src={logo} />
      <ButtonImg onClick={() => goToMatchList(history)} src={match} alt="" />
    </AppBarContainer>
  );
};

export default AppBar;
