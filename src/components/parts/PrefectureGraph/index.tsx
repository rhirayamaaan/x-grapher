import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styles from './styles.scss';
import { selectedPrefectureDataState } from '~/status/atoms/prefectureData';
import { Prefectures } from '~/data';
import { currentGraphSourceState } from '~/status/atoms/currentGraphSource';

interface PrefecuterGraphProps {
  prefectureCode: Prefectures.Constants.Codes;
}

const PrefecuterGraph: FC<PrefecuterGraphProps> = ({ prefectureCode }) => {
  const currentGraphSource = useRecoilValue(currentGraphSourceState);
  const data = useRecoilValue(selectedPrefectureDataState(prefectureCode));

  return (
    <div className={styles.prefectureGraph}>
      <p className={styles.prefectureGraph__name}>{data.name}</p>
      <div
        className={[
          styles.prefectureGraph__bar,
          data.value < 0 ? styles['prefectureGraph__bar--negative'] : styles['prefectureGraph__bar--positive'],
          styles[`prefectureGraph__bar--${currentGraphSource}`],
        ]
          .join(' ')
          .trim()}
      >
        <div
          className={styles.prefectureGraph__barItem}
          style={{
            width: `${Math.abs(data.value)}%`,
          }}
        >
          <span className={styles.prefectureGraph__barValue}>{`${data.value}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default PrefecuterGraph;
