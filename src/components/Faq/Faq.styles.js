import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
  },

  sectionTitle: {
    margin: '8% 0 4% 0',
    color: theme.palette.primary.main,
    lineHeight: '2.5rem',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    [theme.breakpoints.up('sm')]: {
      margin: '4% 0 2% 0',
    },
    [theme.breakpoints.up('md')]: {
      margin: '3% 0 2% 0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '2% 0 2% 0',
    },
  },
  
  question: {
    color:theme.palette.primary.main,
    fontWeight: '300',
  },

  origamiGarden: {
    display: 'block',
    width: '160px',
    height: '200px',
    margin: '0 auto',
    borderRadius: '50%',
  }
}));

export default useStyles;