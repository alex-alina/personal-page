import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  logo: {
    paddingLeft: '4%',
  },

  menuButton: {
    color: '#fff',
  },

  navList: {
    listStyleType: 'none',
    width: '20%',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingRight: '4%',
  },

  navLink: {
    textDecoration: 'none',
  },

  navLinkFont: {
    color: '#fff',
    fontWeight: '400',
    '&:hover': {
      fontWeight: '500',
    }
  },
}));

export default useStyles;