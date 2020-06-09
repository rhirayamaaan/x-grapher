import React, { FC, useCallback } from 'react';
import Icon, { IconThemes } from '~/components/parts/Icon';
import { currentSortSourceState } from '~/status/atoms/currentSortSource';
import { JapanMeteorologicalAgency } from '~/data';
import { useRecoilState } from 'recoil';
import { tableOrderSortState, TableSortOrderConstants } from '~/status/atoms/tableOrder';
import styles from './styles.scss';

const categories = [
  {
    category: JapanMeteorologicalAgency.Constants.Categories.HIGHEST_TEMPERATURE,
    icon: IconThemes.THERMOMETER,
  },
  {
    category: JapanMeteorologicalAgency.Constants.Categories.LOWEST_TEMPERATURE,
    icon: IconThemes.THERMOMETER,
  },
  {
    category: JapanMeteorologicalAgency.Constants.Categories.MAXIMUM_SUSTAINED_WINDS,
    icon: IconThemes.WIND,
  },
  {
    category: JapanMeteorologicalAgency.Constants.Categories.RAINFALL,
    icon: IconThemes.RAIN,
  },
  {
    category: JapanMeteorologicalAgency.Constants.Categories.SUNLIGHT_HOURS,
    icon: IconThemes.SUN,
  },
];

const orders = [
  {
    type: TableSortOrderConstants.Types.ASCENDING,
  },
  {
    type: TableSortOrderConstants.Types.DESCENDING,
  },
];

interface ChnageSortSourceOrderProps {
  type: TableSortOrderConstants.Types;
  isCurrent: boolean;
  onClick: (type: TableSortOrderConstants.Types) => void;
}

const ChnageSortSourceOrder: FC<ChnageSortSourceOrderProps> = ({ type, isCurrent, onClick }) => {
  const setOrder = useCallback(() => {
    onClick(type);
  }, []);

  return (
    <li className={styles.changeSortSource__order}>
      <button
        onClick={setOrder}
        className={[
          styles.changeSortSource__orderButton,
          isCurrent ? styles['changeSortSource__orderButton--current'] : '',
        ]
          .join(' ')
          .trim()}
      >
        <Icon
          className={[styles.changeSortSource__orderIcon, styles[`changeSortSource__orderIcon--${type}`]]
            .join(' ')
            .trim()}
          theme={IconThemes.SORT}
        />
        <span className={styles.changeSortSource__orderText}>{TableSortOrderConstants.jaNames[type]}</span>
      </button>
    </li>
  );
};

interface ChangeSortSourceCategoryProps {
  category: JapanMeteorologicalAgency.Constants.Categories;
  isCurrent: boolean;
  icon: IconThemes;
  onClick: (category: JapanMeteorologicalAgency.Constants.Categories) => void;
}

const ChangeSortSourceCategory: FC<ChangeSortSourceCategoryProps> = ({ category, isCurrent, icon, onClick }) => {
  const setCategory = useCallback(() => {
    onClick(category);
  }, []);

  return (
    <li className={styles.changeSortSource__category}>
      <button
        className={[
          styles.changeSortSource__categoryButton,
          isCurrent ? styles['changeSortSource__categoryButton--current'] : '',
        ]
          .join(' ')
          .trim()}
        onClick={setCategory}
      >
        <Icon theme={icon} className={styles.changeSortSource__categoryIcon} />
        {JapanMeteorologicalAgency.Constants.jaCategoryNames[category]}
      </button>
    </li>
  );
};

interface ChangeSortSourceProps {
  className?: string;
}

const ChangeSortSource: FC<ChangeSortSourceProps> = ({ className }) => {
  const [currentSortSource, setCurrentSortSource] = useRecoilState(currentSortSourceState);
  const [tableSortOrder, setTableSortOrder] = useRecoilState(tableOrderSortState);
  const setCategory = useCallback(
    (category: JapanMeteorologicalAgency.Constants.Categories) => setCurrentSortSource(category),
    []
  );
  return (
    <div className={[styles.changeSortSource, className].join(' ').trim()}>
      <ul className={styles.changeSortSource__orders}>
        {orders.map((order) => (
          <ChnageSortSourceOrder
            type={order.type}
            isCurrent={tableSortOrder === order.type}
            onClick={setTableSortOrder}
            key={order.type}
          />
        ))}
      </ul>
      <ul className={styles.changeSortSource__categories}>
        {categories.map((cateogry) => (
          <ChangeSortSourceCategory
            {...cateogry}
            isCurrent={currentSortSource === cateogry.category}
            onClick={setCategory}
            key={cateogry.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChangeSortSource;
