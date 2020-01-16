import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './SideMenu.styles';
import menuContent from '../../utils/menuContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
                {item.text}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}