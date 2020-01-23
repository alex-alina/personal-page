import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00747c',
    },
    secondary: {
      main: '#fff',
      dark: '#37474f',
    },
    textSecondary: {
      main:'#37474f',
    }
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
        minWidth: '120px',
        backgroundColor: '#0098a6',
        borderRadius: '50px',
        border: '2px solid #0098a6',
        '&:hover': {
          backgroundColor: '#14a3ab !important',
          border: '2px solid #14a3ab',
        },
        color: '#fff',
      }
    },
    MuiIcon: {
      root: {
        fontSize: '30px',
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