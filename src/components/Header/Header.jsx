import React from 'react';
import logo from '../../assests/logo.png';

import styles from './Header.module.css';
const Header = () => {
  return (
    <div>
      <div className={styles.image}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
