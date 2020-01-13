import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  card: {
    width: 'auto',
  },
  media: {
    height: 240,
    // maxWidth: 440,
    maxWidth: '100%',
  },
  projectLink: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

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
        <CardMedia
          className={classes.media}
          image={image}
          title="project cover image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" align="left">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" align="left">
            {stack}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className={classes.projectLink}>
        <Button size="medium" color="primary">
          {openProjectBtn}
        </Button>
      </a>
        <Button size="medium" color="primary">
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className={classes.projectLink}>{gitHubBtn} </a>
        </Button>
      </CardActions>
    </Card>
  );
}