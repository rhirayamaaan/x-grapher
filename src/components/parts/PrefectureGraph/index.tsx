import React, { FC, useState } from 'react';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import styles from './styles.scss';
import { prefectureGraphDataState, selectedPrefectureGraphDataState } from '~/status/atoms/prefectureGraphData';
import { Prefectures, JapanMeteorologicalAgency } from '~/data';
import { currentGraphSourceState } from '~/status/atoms/currentGraphSource';
import { prefectureSortDataState } from '~/status/atoms/prefectureSortData';

export const PREFECTURE_GRAPH_HEIGHT = parseInt(styles.MODULE_HEIGHT);

interface PrefectureGraphPopupProps {
  prefectureCode: Prefectures.Constants.Codes;
  isDisplayed: boolean;
}

const PrefectureGraphPopup: FC<PrefectureGraphPopupProps> = ({ prefectureCode, isDisplayed }) => {
  const { name, value, direction, currentSortSource } = useRecoilValue(prefectureSortDataState(prefectureCode));
  return (
    <div
      className={[styles.prefectureGraph__popup, isDisplayed ? styles['prefectureGraph__popup--displayed'] : '']
        .join(' ')
        .trim()}
    >
      <ul className={styles.prefectureGraph__popupItems}>
        <li className={styles.prefectureGraph__popupItem}>
          {JapanMeteorologicalAgency.Constants.jaCategoryNames[currentSortSource]}：
          {`${value}${JapanMeteorologicalAgency.Constants.jaUnitNames[currentSortSource]}`}
        </li>
        {direction ? <li className={styles.prefectureGraph__popupItem}>風向：{direction}</li> : null}
        <li className={styles.prefectureGraph__popupItem}>県庁所在地：{name}</li>
      </ul>
    </div>
  );
};

interface PrefecuterGraphProps {
  prefectureCode: Prefectures.Constants.Codes;
}

const PrefecuterGraph: FC<PrefecuterGraphProps> = ({ prefectureCode }) => {
  const currentGraphSource = useRecoilValue(currentGraphSourceState);
  (() => {
    prefectureGraphDataState(prefectureCode);
  })();
  const prefectureGraphData = useRecoilValue(selectedPrefectureGraphDataState(prefectureCode));
  const [isDisplayedPopup, setDisplayedPopup] = useState(false);

  return (
    <div className={styles.prefectureGraph}>
      <p className={styles.prefectureGraph__name}>
        <button onClick={() => setDisplayedPopup(!isDisplayedPopup)} className={styles.prefectureGraph__nameButton}>
          {prefectureGraphData.name}
        </button>
      </p>
      <div
        className={[
          styles.prefectureGraph__bar,
          prefectureGraphData.value < 0
            ? styles['prefectureGraph__bar--negative']
            : styles['prefectureGraph__bar--positive'],
          styles[`prefectureGraph__bar--${currentGraphSource}`],
        ]
          .join(' ')
          .trim()}
      >
        <div className={styles.prefectureGraph__barInner}>
          <div
            className={styles.prefectureGraph__barItem}
            style={{
              width: `${Math.abs(prefectureGraphData.value)}%`,
            }}
          >
            <span className={styles.prefectureGraph__barValue}>{`${prefectureGraphData.value}%`}</span>
          </div>
        </div>
        <PrefectureGraphPopup isDisplayed={isDisplayedPopup} prefectureCode={prefectureCode} />
      </div>
    </div>
  );
};

export default PrefecuterGraph;
