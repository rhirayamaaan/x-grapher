import React, { useCallback } from 'react';
import styles from './styles.scss';
import { useSetRecoilState } from 'recoil';
import { displayedAboutDialogState } from '~/status/atoms/displayedAboutDialog';

const GlobalHeader = () => {
  const setDisplayedAboutDialog = useSetRecoilState(displayedAboutDialogState);
  const setDisplayed = useCallback(() => setDisplayedAboutDialog(true), []);

  return (
    <div className={styles.globalHeader}>
      <h1 className={styles.globalHeader__title}>
        <span className={styles.globalHeader__titleMain}>X Grapher</span>
        <span className={styles.globalHeader__titleSub}>
          Usage by Covid-19 Community Mobility Reports and Japan Meteorological Agency Data
        </span>
      </h1>
      <ul className={styles.globalHeader__menu}>
        <li className={styles.globalHeader__menuItem}>
          <button className={styles.globalHeader__menuLink} onClick={setDisplayed}>
            About
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GlobalHeader;
