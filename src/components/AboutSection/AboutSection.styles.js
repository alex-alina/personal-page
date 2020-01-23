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
      width: '40%',
      margin: '0 auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      margin: '4% 0 0 0',
    },
  },

  greeting: {
    marginTop: '7%',
    marginBottom: '0',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      marginTop: '1.5%',
    },
  },

  subtitles: {
    display: 'block',
    margin: '2.5% 0 0 0',
    fontSize: 'calc(0.95rem + 0.25vw)',
    fontWeight: '400',
    color: theme.palette.primary.main,
  },

  paragraphs: {
    fontSize: 'calc(0.85rem + 0.25vw)',
    fontWeight: '300',
    lineHeight: 1.5,
    color: '#37474f',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'justify', 
    },
  },
}));

export default useStyles;