import React from 'react';
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from './styled';
import logo from '../../assets/logo.png';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/UseForm';
import { Button } from '@material-ui/core';

const LoginPage = () => {
  const [form, onChange, clear] = useForm({ email: '', password: '' });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            fullWidth
            margin={'dense'}
            required
            type={'email'}
          />

          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Password'}
            variant={'outlined'}
            fullWidth
            margin={'dense'}
            required
            type={'password'}
          />
          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
          >
            LOGIN
          </Button>
        </form>
        <SignUpButtonContainer>
          <Button
            type={'submit'}
            fullWidth
            variant={'outlined'}
            color={'secund'}
          >
            SIGN UP!
          </Button>
        </SignUpButtonContainer>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
