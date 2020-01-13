import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    margin: '0 auto',
  },

  sectionTitle: {
    margin: '2% 0',
    color: theme.palette.primary.main,
    lineHeight: '2.5rem',
    fontSize: 'calc(1.5rem + 1vw)',
    fontWeight: '300',
  },
  
  question: {
    color:theme.palette.primary.main,
    fontSize: 'calc(0.75rem + 0.5vw)',
    fontWeight: '300',
  },
}));

export default useStyles;