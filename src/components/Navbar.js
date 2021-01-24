import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from "../styles/NavbarStyles";
import logo from "../images/logo.svg";
import navIcon from "../images/navIcon.svg";

const Navbar=()=>{
  const useStyles=makeStyles(styles);
  const classes=useStyles();
    return(
      <div >
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <img src={logo} className={classes.logo}/>
            <img src={navIcon} className={classes.icon}/>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Navbar;