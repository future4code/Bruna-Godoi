import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secundColor, textColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: textColor,
      button: secundColor,
    },
    secondary: {
      main: secundColor,
    },
    text: {
      primary: '#000',
      fontFamily: ['League Gothic', 'sans-serif'],
    },
  },
});

export default theme;
