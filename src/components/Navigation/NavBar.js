import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './NavBar.styles';
import menuContent from '../../utils/menuContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import SideMenu from './SideMenu';

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" backgroundcolor="primary" >
        <Toolbar className={classes.toolBar}>
        <p
          className={classes.logo} 
          color="secondary" 
        >
          Hello World <span role="img" aria-label="happy face emoji">😊</span>
        </p>

        <Hidden only={['lg', 'xl']}> 
          <SideMenu />
        </Hidden>

        <Hidden only={['xs', 'sm', 'md']}>
          <ul className={classes.navList}>
            {menuContent.map((item, index) => (
              <li key={index} className={classes.navLi}>
                <Link to={item.route} className={classes.navLink}>
                  {item.text}
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