import React from 'react'
import useStyles from './Home.styles';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
};


