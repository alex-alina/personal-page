import React from 'react';
import useStyles from './Faq.styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import faqContent from '../../utils/faqContent';
import gardenOne from '../../assets/gardenOne.png';
import gardenTwo from '../../assets/gardenTwo.png';
import gardenThree from '../../assets/gardenThree.jpg';
import gardenOFour from '../../assets/gardenFour.jpg';


export default function Faq() {
  const classes = useStyles();
  const gardens = [gardenOne, gardenTwo, gardenThree, gardenOFour];

  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle} variant="h6" align="left">More info</Typography>

      {faqContent.map((text) => (
        <ExpansionPanel key={text.question}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className={classes.question}>{text.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1" align="left">{text.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}

      <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className={classes.question}>Tiny Origami Gardens</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              {gardens.map((garden, index) => 
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <img 
                    src={garden} 
                    className={classes.origamiGarden} 
                    alt={`origami garden ${index}`} 
                  />
                </Grid>
              )}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
  );
}



