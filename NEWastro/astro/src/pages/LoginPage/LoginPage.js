import React from 'react';
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from './styled';
import logo from '../../assets/logo.png';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';

const LoginPage = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <InputsContainer>
        <SignUpButtonContainer>
          <Button
            onClick={() => goToSignUp(history)}
            type={'submit'}
            fullWidth
            variant={'text'}
            c
            olor={'secund'}
          >
            Don't have account? SIGN UP!
          </Button>
        </SignUpButtonContainer>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
