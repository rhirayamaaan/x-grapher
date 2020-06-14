import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { NodeGroup } from 'react-move';
import { easeCubicInOut } from 'd3-ease';
import { tableOrderState } from '~/status/atoms/tableOrder';
import PrefecuterGraph, { PREFECTURE_GRAPH_HEIGHT } from '~/components/parts/PrefectureGraph';
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
        y: data.index * PREFECTURE_GRAPH_HEIGHT,
      })}
      update={(data, index) => ({
        y: [data.index * PREFECTURE_GRAPH_HEIGHT],
        timing: { duration: 400, delay: index * 10 + 150, ease: easeCubicInOut },
      })}
    >
      {(nodes) => (
        <ul
          className={[styles.graphTable, className].join(' ').trim()}
          style={{
            height: PREFECTURE_GRAPH_HEIGHT * nodes.length,
          }}
        >
          {nodes.map(({ key, state }) => (
            <li
              className={styles.graphTable__item}
              key={key}
              style={{
                transform: `translate3d(0,${state.y}px,0)`,
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
