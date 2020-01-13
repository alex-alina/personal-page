import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: '0 auto',
  },

  sectionTitle: {
    color: theme.palette.primary.main,
    lineHeight: '2.5rem',
  },

  faqDivider: {
    marginTop: theme.spacing.unit * 0.25,
    marginBottom: theme.spacing.unit * 2.25,
  },
  
  heading: {
    color:theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export default useStyles;