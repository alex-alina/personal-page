import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    margin: '0 auto',
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
}));

export default function AboutSection() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.intro}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
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