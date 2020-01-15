import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    margin: '7% auto 2% auto',
    [theme.breakpoints.up('md')]: {
      margin: '5% 0 2% 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1% auto 3% auto',
    },
  },

  title: {
    marginTop: '2%',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
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
