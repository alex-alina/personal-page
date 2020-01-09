import React from 'react';
import { Link } from 'react-router-dom';
import menuContent from '../../utils/menuContent';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: '#fff',
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'center',
  },

  navLink: {
    textDecoration: 'none',
  },

  navLinkFont: {
    color: '#1c313a',
    fontWeight: '400',
  },
}));

export default function SideMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="side-menu"
        aria-controls="side-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        className={classes.menuButton} 
      >
        <MenuIcon />
      </IconButton>
   
      <Menu
        id="side-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {menuContent.map((item, index) => (
          <MenuItem 
            onClick={handleClose} 
            className={classes.menuItem}
            key={index}
          >
          <Link to={item.route} className={classes.navLink}>
            <Typography 
              className={classes.navLinkFont} 
              variant="h6" 
              noWrap
            >
              {item.text}
            </Typography>
          </Link>
        </MenuItem>
        ))}
      </Menu>
    </div>
  );
}