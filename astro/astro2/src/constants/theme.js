import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secundColor, textColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: textColor,
      button: secundColor,
    },
    // secund: {
    //   main: secundColor,
    //   contrastText: '#000',
    // },
    text: {
      primary: '#000',
    },
  },
});

export default theme;
