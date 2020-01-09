import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    margin: '0 auto',
    padding: '3%',
  },

  name: {
    marginTop: '1.15%',
    color: '#60ae72,',
    fontSize: 'calc(1.75rem + 1vw)',
  },

  title: {
    marginTop: '0.25%',
    color: '#60ae72,',
    fontSize: 'calc(1rem + 0.5vw)',
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
    width: '40px',
    height: '40px',
    marginRight: '20px',
    borderRadius: '50%',
    backgroundColor: '#14a3ab',
  },

  img: {
    width: '33px',
    height: '33px',
    borderRadius: '50%',
  }
}));

export default useStyles;