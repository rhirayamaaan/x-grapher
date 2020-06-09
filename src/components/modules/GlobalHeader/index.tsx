import React from 'react';
import styles from './styles.scss';

const GlobalHeader = () => (
  <div className={styles.globalHeader}>
    <h1 className={styles.globalHeader__title}>
      <span className={styles.globalHeader__titleMain}>X Grapher</span>
      <span className={styles.globalHeader__titleSub}>
        Usage by Covid-19 Community Mobility Reports and Japan Meteorological Agency Data
      </span>
    </h1>
    <ul className={styles.globalHeader__menu}>
      <li className={styles.globalHeader__menuItem}>
        <a href="#" className={styles.globalHeader__menuLink}>
          About
        </a>
      </li>
    </ul>
  </div>
);

export default GlobalHeader;
