import React from 'react';
import useStyles from './Intro.styles';
import AlinaRusuCV from '../../assets/AlinaRusuCV.pdf';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import exercism from '../../assets/exercism.png';

export default function Intro() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <section className={classes.root} >
        <Typography className={classes.name}>
          Alina Rusu
        </Typography>

        <Typography className={classes.title}>
          Junior Full Stack Developer
        </Typography>

        <Typography className={classes.title}>
          Based in Amsterdam
        </Typography>

        <div className={classes.iconsWrapper}>
          <a 
            href="https://github.com/alex-alina/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.profileLink}
          >
            <div className={classes.iconContainer}>
              <Icon className="fab fa-github" style={{ color: '#fff' }} />
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/alina-rusu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.profileLink}
          >
            <div className={classes.iconContainer}>
              <Icon 
                className="fab fa-linkedin-in" 
                style={{ fontSize: 25, color: '#fff' }} 
              />
            </div>
          </a>

          <a 
            href="https://exercism.io/profiles/AlexAlina" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.profileLink}
          >
            <div className={classes.iconContainer}>
              <img 
                className={classes.img} 
                src={exercism} 
                alt="exercism-logo" />
            </div>
          </a>

          <Button 
            size="small" 
            variant="contained"
            className={classes.downloadBtn}
          >
            <a 
              href={AlinaRusuCV} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={classes.cvLink}
            >
              Download CV 
            </a>
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
}


