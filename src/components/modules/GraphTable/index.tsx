import React from 'react';
import { useRecoilValue } from 'recoil';
import { tableOrderState } from '~/status/atoms/tableOrder';
import PrefecuterGraph from '~/components/parts/PrefectureGraph';
import styles from './styles.scss';

const GraphTable = () => {
  const tableOrder = useRecoilValue(tableOrderState);

  return (
    <ul className={styles.graphTable}>
      {tableOrder.map((code) => (
        <li className={styles.graphTable__item} key={code}>
          <PrefecuterGraph prefectureCode={code} />
        </li>
      ))}
    </ul>
  );
};

export default GraphTable;
