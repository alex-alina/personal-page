import React from 'react';
import projectsDescription from '../../utils/projectsDescription';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ProjectCard from '../ProjectCard/ProjectCard';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    width: '70%',
    margin: '0 auto',
  },

  sectionTitle: {
    width: '70%',
    margin: '4% 0 2% 0',
    fontSize: 'calc(1.75rem + 1vw)',
    fontWeight: '300',
  }
}));

export default function Projects() {
  const classes = useStyles();
  const { 
    projectOne, 
    projectTwo, 
    projectThree, 
    projectFour, 
    buttons,
  } = projectsDescription;

  return (
    <div className={classes.root}>
      <Typography 
        align="left" 
        variant="h3" 
        noWrap
        className={classes.sectionTitle}
        >
          Projects
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <ProjectCard 
            title={projectOne.title} 
            description={projectOne.description} 
            image={projectOne.image}
            openProjectBtn={buttons.openProject} 
            gitHubBtn={buttons.gitHub}
            projectLink={projectOne.projectLink}
            gitHubLink={projectOne.gitHubLink}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
        <ProjectCard 
            title={projectThree.title} 
            description={projectThree.description} 
            image={projectThree.image}
            openProjectBtn={buttons.openProject} 
            gitHubBtn={buttons.gitHub}
            projectLink={projectThree.projectLink}
            gitHubLink={projectThree.gitHubLink}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
        <ProjectCard 
            title={projectTwo.title} 
            description={projectTwo.description} 
            image={projectTwo.image}
            openProjectBtn={buttons.openProject} 
            gitHubBtn={buttons.gitHub}
            projectLink={projectTwo.projectLink}
            gitHubLink={projectTwo.gitHubLink}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
        <ProjectCard 
            title={projectFour.title} 
            description={projectFour.description} 
            image={projectFour.image}
            openProjectBtn={buttons.openProject} 
            gitHubBtn={buttons.gitHub}
            projectLink={projectFour.projectLink}
            gitHubLink={projectFour.gitHubLink}
          />
        </Grid>
      </Grid>
    </div>
  );
}