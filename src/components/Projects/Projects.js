import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import ProjectCard from '../ProjectCard/ProjectCard';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <ProjectCard />
    
      
    </div>
  );
}