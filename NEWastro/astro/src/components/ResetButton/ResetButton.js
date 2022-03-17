import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { Button } from '@material-ui/core';
import { SignUpButtonContainer } from './styled';

const ResetButton = () => {
  const clickReset = () => {
    axios.put(BASE_URL + 'clear').then((response) => {
      alert('Match List deleted');
    });
  };
  return (
    <SignUpButtonContainer>
      <Button
        onClick={clickReset}
        type={'submit'}
        fullWidth
        variant={'contained'}
        color={'secund'}
      >
        Reset Matches
      </Button>
    </SignUpButtonContainer>
  );
};

export default ResetButton;
