import * as React from 'react';
import "./styles/NavBar.css"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const NavBar =(props) => {
  return (

    <header className="navigation">
      <div className="left">
        <a>{props.name}</a>
      </div>
      <div className="right">
        <ul className="nav-options">
        {props.links.map((linkObj) => {
          return (
            <li>
              <Link to={linkObj.path}>{linkObj.title}</Link>
            </li>
          )
        })}
        </ul>
      </div>
    </header>
  );
}
NavBar.propTypes = {
  name: PropTypes.string,
  links: PropTypes.arrayOf(Object)
}
export default NavBar;