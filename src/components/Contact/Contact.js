import React from 'react';
import useStyles from './Contact.styles';
import Typography from '@material-ui/core/Typography';

export default function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <section className={classes.root} >
        <Typography className={classes.title}>
          Let's chat!
        </Typography>

        <Typography className={classes.subTitle} align="left">
        Message me on {' '}
          <a 
            href="https://www.linkedin.com/in/alina-rusu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.contactLink}
          >
            LinkedIn
          </a>
          {' '} or get in touch by email at{' '} 
          <a 
            href="mailto:alex.alina.rusu@gmail.com?subject=Hi Alina!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.contactLink}
          >
            alex.alina.rusu@gmail.com
          </a>.
        </Typography>
      </section>
    </React.Fragment>
  );
}
