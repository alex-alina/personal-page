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
    MuiDivider: {
      light: {
        backgroundColor: '#ffffff8C',
      }
    },
    MuiListItemText: {
      primary: {
        color: '#fff',
      }
    },
    // MuiListItem: {
    //   button: {
    //     paddingTop: '10px',
    //     paddingBottom: '10px',
    //   },
    //   root: {
    //     paddingTop: '6px',
    //     paddingBottom: '6px',
    //   },
    // },
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