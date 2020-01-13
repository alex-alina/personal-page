import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
    margin: '1% auto',
  },

  name: {
    marginTop: '1.25%',
    fontSize: 'calc(1.75rem + 1vw)',
    fontWeight: '300',
  },

  title: {
    marginTop: '0.25%',
    fontSize: 'calc(1rem + 0.5vw)',
    fontWeight: '300',
  },

  iconsWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '1%',
  },

  profileLink: {
    textDecoration: 'none',
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '40px',
    height: '40px',
    marginRight: '20px',
    padding: 0,
    borderRadius: '50%',
    backgroundColor: '#14a3ab',
    '&:hover': {
      backgroundColor: '#0f757a',
    }
  },

  img: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    
  }
}));

export default useStyles;