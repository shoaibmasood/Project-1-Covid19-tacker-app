import React from 'react';
import headersvg from '../../assests/wave.svg';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.img}>
      <img src={headersvg} alt="svg" />
    </div>
  );
};

export default Header;
