import React from 'react';
import useStyles from './AboutSection.styles';
import Grid from '@material-ui/core/Grid';
import aboutContent from '../../utils/aboutContent';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import workingOnTinyGarden from '../../assets/workingOnTinyGarden.jpg';

export default function AboutSection() {
  const classes = useStyles();

  const { 
    subtitleIntro,
    subtitleMiddle,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    paragraphFive,
    paragraphSix,
    paragraphSeven,
    paragraphEight,
    ending,
   } = aboutContent;

  return (
    <section className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <h5 className={classes.greeting} align="left">
            Hi there!
          </h5>
          <h5 className={classes.subtitles} align="left">
            {subtitleIntro}
          </h5>
          <p className={classes.paragraphs} align="left">
            {paragraphOne}
          </p>
          <p className={classes.paragraphs} align="left">
            {paragraphTwo}
          </p>
          <p className={classes.paragraphs} align="left">
            {paragraphThree}
          </p>
          <h5 className={classes.subtitles} align="left">
            {subtitleMiddle}
          </h5>
          <p className={classes.paragraphs} align="left">
            {paragraphFour}
          </p>
          <p className={classes.paragraphs} align="left">
            {paragraphFive}
          </p>
          <p className={classes.paragraphs} align="left">
            {paragraphSix}
          </p>
          <p className={classes.paragraphs} align="left">
            {paragraphSeven}
          </p>
          <p className={classes.paragraphs} align="left">
            {paragraphEight}
          </p>
          <p className={classes.paragraphs} align="left">
            {ending}
          </p>
        </Grid>
    
        <Grid item xs={12} lg={3}>
          <img 
            src={workingOnTinyGarden} 
            className={classes.picture} 
            alt="me working on an origami garden"
          />  
        </Grid>
      </Grid>
      <Faq />
      <Contact />
    </section>
  );
}