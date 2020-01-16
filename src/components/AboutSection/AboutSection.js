import React from 'react';
import useStyles from './AboutSection.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import aboutContent from '../../utils/aboutContent';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import workingOnTinyGarden from '../../assets/workingOnTinyGarden.jpg';

export default function AboutSection() {
  const classes = useStyles();
  const { intro, professionalDescription, personalDescription } = aboutContent;

  return (
    <section className={classes.root}>
      <div className={classes.intro}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={9} md={9}>
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
    
          <Grid item xs={12} sm={3} md={3}>
            <img 
              src={workingOnTinyGarden} 
              className={classes.picture} 
              alt="me finishing an origami garden"
            />  
          </Grid>
        </Grid>
      </div>
      <Faq />
      <Contact />
    </section>
  );
}