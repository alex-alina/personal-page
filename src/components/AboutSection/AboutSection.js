import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import aboutContent from '../../utils/aboutContent';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';

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
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  picture: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',

  },
  pictureContainer: {
    borderRadius: '50',
    width: 'auto',
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    width: '100%',
  },
  name: {
    marginTop: '7%',
    fontSize: 'calc(1.5rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '2%',
    },
  },

  introTitle: {
    marginTop: '0.25%',
    fontSize: 'calc(0.85rem + 0.25vw)',
    fontWeight: '400',
  },
  introDetails: {
    fontSize: 'calc(0.75rem + 0.25vw)',
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

export default function AboutSection() {
  const classes = useStyles();
  const { intro, professionalDescription, personalDescription } = aboutContent;

  return (
    <section className={classes.root}>
      <div className={classes.intro}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={12}>
        <Typography className={classes.name} align="left">
          Alina Rusu
        </Typography>

        <Typography className={classes.introTitle} align="left">
          {intro}
        </Typography>

        <Typography className={classes.introDetails} align="left">
          {professionalDescription}
        </Typography>

        <Typography className={classes.introDetails} align="left">
          {personalDescription}
        </Typography>

        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className={classes.pictureContainer}>
        </div>
        </Grid>
      </Grid>
      </div>
      <Faq />
      <Contact />
    </section>
  );
}