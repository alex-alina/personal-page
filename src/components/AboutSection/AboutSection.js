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
        <Grid container spacing={5}>
          <Grid item xs={12} sm={9} md={9}>
            <h3 className={classes.name} align="left">
              Alina Rusu
            </h3>

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
    
          <Grid item xs={12} sm={3} md={3}>
            <img 
              src={workingOnTinyGarden} 
              className={classes.picture} 
              alt="me finishing an origami garden"
            />  
          </Grid>
        </Grid>
      <Faq />
      <Contact />
    </section>
  );
}