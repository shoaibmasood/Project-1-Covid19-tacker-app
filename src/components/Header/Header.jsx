import React from 'react';

import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      {/* <img className={styles.img} src={headersvg} alt="svg" /> */}
      <div className={styles.heading}>
        <h1> COVID-19 Tracker</h1>
      </div>
    </div>
  );
};

export default Header;
