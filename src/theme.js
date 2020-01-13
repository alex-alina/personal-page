import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00747c',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ],
    useNextVariants: true,
  },
  overrides: {
    MuiMenu: {
      paper: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: '#fff',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#14a3ab',
        borderRadius: '50px',
        border: '2px solid #14a3ab',
        '&:hover': {
          backgroundColor: '#0f757a',
          border: '2px solid #0f757a',
        },
        color: '#fff',
      }
    },
    MuiIcon: {
      root: {
        fontSize: '30px',
        width: '30px',
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      }
    },
  }
});

export default theme;