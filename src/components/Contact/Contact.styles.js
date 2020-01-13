import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '70%',
    margin: '1% auto 3% auto',
  },

  title: {
    marginTop: '2%',
    fontSize: 'calc(1.75rem + 1vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
  },

  subTitle: {
    marginTop: '0.25%',
    fontSize: 'calc(1rem + 0.5vw)',
    fontWeight: '300',
  },

  contactLink: {
    textDecoration: 'none',
    fontSize: 'calc(1rem + 0.5vw)',
    fontWeight: '400',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;