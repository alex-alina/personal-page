import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: '0 auto',
  },

  sectionTitle: {
    margin: '3% 0 2% 0',
    fontSize: 'calc(1.5rem + 1vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
  },
}));
 export default useStyles;