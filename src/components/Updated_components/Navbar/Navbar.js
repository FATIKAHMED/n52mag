import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import logo from '../Assets/img1.png';

import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img className="logo_image" src={logo} alt="logo here" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Buy
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Tutorials
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Rewards
          </a>
        </li>

        <li className="nav__item">
          <a href="#" className="nav__link">
            Affiliates
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact Us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <div className="acclog">
              <AccountCircleOutlinedIcon />
              <span>Sign in</span>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Button variant="outlined" className="learn_more_button">
              Learn More
            </Button>
          </a>
        </li>
      </ul>
      <div className={icon}>
        <div className="line1">sd</div>
        <div className="line2">ds</div>
        <div className="line3">dsd</div>
      </div>
    </nav>
  );
}

export default Navbar;
