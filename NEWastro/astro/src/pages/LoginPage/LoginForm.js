import React from 'react';
import { InputsContainer } from './styled';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForms';
import { Button } from '@material-ui/core';
import { goToProfile } from '../../routes/coordinator';

const LoginForm = () => {
  const [form, onChange] = useForm({ email: '', password: '' });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  const history = useHistory();
  return (
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
          onClick={() => goToProfile(history)}
          type={'submit'}
          fullWidth
          variant={'contained'}
          color={'primary'}
        >
          LOGIN
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
