import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    margin: '7% auto 5% auto',
    [theme.breakpoints.up('sm')]: {
      margin: '4% 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1.5% auto 3% auto',
    },
  },

  title: {
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
    margin: '2% 0',
    [theme.breakpoints.up('md')]: {
      margin: '4% 0 1% 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '2% 0 0.5% 0',
    },
  },

  subTitle: {
    marginTop: '0.25%',
    fontSize: 'calc(0.85rem + 0.25vw)',
    fontWeight: '300',
  },

  contactLink: {
    textDecoration: 'none',
    fontSize: 'calc(0.85rem + 0.25vw)',
    fontWeight: '400',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
