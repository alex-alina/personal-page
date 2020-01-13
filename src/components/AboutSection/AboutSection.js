import React from 'react';
import Faq from '../Faq/Faq';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  
}));

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Faq></Faq>
      
    </div>
  );
}