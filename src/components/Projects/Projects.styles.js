import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: '0 auto',
  },

  sectionTitle: {
    margin: '4% 0 2% 0',
    fontSize: 'calc(1.75rem + 1vw)',
    fontWeight: '300',
  },
}));
 export default useStyles;