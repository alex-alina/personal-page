import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: '#fff',
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'center',
  },

  navLink: {
    textDecoration: 'none',
  },

  navLinkFont: {
    color: '#1c313a',
    fontWeight: '400',
  },
}));

export default useStyles;