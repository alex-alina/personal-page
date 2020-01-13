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
          Get in touch by email {' '} 
          <a 
            href="mailto: alex.alina.rusu@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.contactLink}
          >
            alex.alina.rusu@gmail.com {' '}
          </a>
          or message me on {' '}
          <a 
            href="https://www.linkedin.com/in/alina-rusu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.contactLink}
          >
            LinkedIn.
          </a>
        </Typography>
      </section>
    </React.Fragment>
  );
}


