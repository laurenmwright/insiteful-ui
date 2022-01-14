import * as React from 'react';
import "./styles/NavBar.css"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/icons-material/Menu'
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';



const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (

    <header className="navigation" style={{backgroundColor: props.backgroundColor}}>
      <div className="left">
        <a style={{color: props.fontColor}}>{props.name}</a>
      </div>
      <div className="right">
        <Menu
          ref={anchorEl}
          onClick={handleClick}
          sx={{fontSize: 30, color: props.fontColor}}
        />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Paper elevation={6}>
            <MenuList  style={{}}>
              {props.links.map((linkObj) => {
                return (
                  <MenuItem>
                    <Link className="link-items" style={{color: props.fontColor}} to={linkObj.path}>{linkObj.title}</Link>
                  </MenuItem>
                )
              })}
            </MenuList>
          </Paper>
        </Popover>

      </div>
    </header>
  );

}
NavBar.propTypes = {
  name: PropTypes.string,
  links: PropTypes.arrayOf(Object),
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string
}

NavBar.defaultProps = {
  name: "Lauren Wright",
  link: [
    {
      title: "Home",
      path: "/"
    }],
    backgroundColor: "white",
    fontColor: "black"
}
export default NavBar;