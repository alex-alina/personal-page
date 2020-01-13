import React from 'react';
import useStyles from './Faq.styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import faqContent from '../../utils/faqContent';
import { Divider } from '@material-ui/core';


export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle} variant="h6">F.A.Q</Typography>
      
      <Divider className={classes.faqDivider} />
      {faqContent.map((text) => (
        <ExpansionPanel key={text.question}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className={classes.heading}>{text.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1" align="left">{text.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}