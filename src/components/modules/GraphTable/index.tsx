import React, { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { NodeGroup } from 'react-move';
import { easeCubicInOut } from 'd3-ease';
import { tableOrderState } from '~/status/atoms/tableOrder';
import PrefecuterGraph from '~/components/parts/PrefectureGraph';
import styles from './styles.scss';

interface GraphTableProps {
  className?: string;
}

const GraphTable: FC<GraphTableProps> = ({ className }) => {
  const tableOrder = useRecoilValue(tableOrderState);

  return (
    <NodeGroup
      data={tableOrder}
      keyAccessor={(data) => data.code}
      start={(data) => ({
        y: data.index * 33,
      })}
      update={(data, index) => ({
        y: [data.index * 33],
        timing: { duration: 400, delay: index * 10, ease: easeCubicInOut },
      })}
    >
      {(nodes) => (
        <ul className={[styles.graphTable, className].join(' ').trim()}>
          {nodes.map(({ key, state }) => (
            <li
              className={styles.graphTable__item}
              key={key}
              style={{
                transform: `translateY(${state.y}px)`,
              }}
            >
              <PrefecuterGraph prefectureCode={key} />
            </li>
          ))}
        </ul>
      )}
    </NodeGroup>
  );
};

export default GraphTable;
