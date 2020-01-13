import React from 'react';
import Faq from '../Faq/Faq';
import { makeStyles } from '@material-ui/core/styles';
import Contact from '../Contact/Contact';

const useStyles = makeStyles(theme => ({
  
}));

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Faq />
      <Contact />
    </div>
  );
}