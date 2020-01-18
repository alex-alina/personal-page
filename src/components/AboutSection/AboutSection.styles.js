import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      margin: '5% auto 0 auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      margin: '3% auto 0 auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
      margin: '3% auto 0 auto',
    },
  },

  picture: {
    display: 'block',
    width: '80%',
    height: 'auto',
    margin: '0 auto',
    borderRadius: '50%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },

  name: {
    marginTop: '7%',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      marginTop: '2%',
    },
  },

  subtitles: {
    marginTop: '0.75%',
    fontSize: 'calc(0.95rem + 0.25vw)',
    fontWeight: '400',
    color: '#37474f',
  },

  paragraphs: {
    fontSize: 'calc(0.85rem + 0.25vw)',
    fontWeight: '300',
    marginTop: '7%',
    [theme.breakpoints.up('md')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '2%',
    },
  },
}));

export default useStyles;