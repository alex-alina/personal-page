import React from 'react';
import useStyles from './ProjectCard.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ProjectCard(props) {
  const classes = useStyles();
  const { 
    title, 
    description, 
    stack, 
    openProjectBtn, 
    gitHubBtn, 
    image,
    projectLink,
    gitHubLink,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <a 
          href={projectLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={classes.projectLink}
        >
          <CardMedia
            className={classes.media}
            image={image}
            title="project cover image"
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="h2" 
              align="left"
            >
              {title}
            </Typography>

            <Typography 
              variant="body1" 
              color="textSecondary" 
              component="p" 
              align="left"
            >
              {description}
            </Typography>

            <Typography 
              variant="body1" 
              color="textSecondary" 
              component="p" 
              align="left"
            >
              {stack}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>

      <CardActions>
        <Button 
          size="medium" 
          color="primary"
        >
          <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.projectLink}
          >
            {openProjectBtn}
          </a>
        </Button>
        
        <Button 
          size="medium" 
          color="primary"
        >
          <a 
            href={gitHubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={classes.projectLink}
          >
            {gitHubBtn} 
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}