import React from 'react';
import { Link } from 'react-router-dom';
import menuContent from '../../utils/menuContent';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  logo: {
    paddingLeft: '4%',
  },

  menuButton: {
    color: '#fff',
  },

  navList: {
    listStyleType: 'none',
    width: '35%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  navLink: {
    textDecoration: 'none',
  },

  navLinkFont: {
    color: '#fff',
    fontWeight: '400',
    '&:hover': {
      fontWeight: '500',
    }
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" backgroundcolor="primary" >
        <Toolbar className={classes.toolBar}>
        <Typography 
          className={classes.logo} 
          variant="h5" 
          color="secondary" 
          noWrap
        >
          Welcome <span role="img" aria-label="happy face emoji"> 😊</span>
        </Typography>

        <Hidden only={['lg', 'xl']}> 
        <SideMenu />
        </Hidden>

        <Hidden only={['xs', 'sm', 'md']}>
          <ul className={classes.navList}>
            {menuContent.map((item, index) => (
              <li key={index} className={classes.navLi}>
                <Link to={item.route} className={classes.navLink}>
                  <Typography 
                    className={classes.navLinkFont} 
                    variant="h5" 
                    noWrap
                  >
                    {item.text}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}