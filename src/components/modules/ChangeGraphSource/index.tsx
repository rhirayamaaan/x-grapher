import React, { FC } from 'react';
import { Covid19CommunityMobilityReports } from '~/data';
import { useRecoilState } from 'recoil';
import { currentGraphSourceState } from '~/status/atoms/currentGraphSource';
import Icon, { IconThemes } from '~/components/parts/Icon';
import styles from './styles.scss';

const itemsData = [
  {
    category: Covid19CommunityMobilityReports.Constants.Categories.RETAIL_AND_RECREATION,
    icon: IconThemes.STORE,
  },
  {
    category: Covid19CommunityMobilityReports.Constants.Categories.GROCERY_AND_PHARMACY,
    icon: IconThemes.CART,
  },
  {
    category: Covid19CommunityMobilityReports.Constants.Categories.PARKS,
    icon: IconThemes.PARK,
  },
  {
    category: Covid19CommunityMobilityReports.Constants.Categories.TRANSIT_STATIONS,
    icon: IconThemes.TRAIN,
  },
  {
    category: Covid19CommunityMobilityReports.Constants.Categories.WORKSPACES,
    icon: IconThemes.BUILDING,
  },
];

interface ChangeGraphSourceItemProps {
  category: Covid19CommunityMobilityReports.Constants.Categories;
  icon: IconThemes;
  isCurrent: boolean;
  onClick(category: Covid19CommunityMobilityReports.Constants.Categories): void;
}

const ChangeGraphSourceItem: FC<ChangeGraphSourceItemProps> = ({ category, icon, isCurrent, onClick }) => (
  <li className={[styles.changeGraphSource__item, styles[`changeGraphSource__item--${category}`]].join(' ').trim()}>
    <button
      className={[
        styles.changeGraphSource__button,
        styles[`changeGraphSource__button--${category}`],
        isCurrent ? styles['changeGraphSource__button--current'] : '',
      ]
        .join(' ')
        .trim()}
      onClick={() => onClick(category)}
    >
      <Icon className={styles.changeGraphSource__icon} theme={icon} />
      {Covid19CommunityMobilityReports.jaCategoryNames[category]}
    </button>
  </li>
);

const ChangeGraphSource = () => {
  const [currentGraphSource, setCurrentGraphSource] = useRecoilState(currentGraphSourceState);
  return (
    <ul className={[styles.changeGraphSource, styles[`changeGraphSource--${currentGraphSource}`]].join(' ').trim()}>
      {itemsData.map((item) => (
        <ChangeGraphSourceItem
          {...item}
          isCurrent={currentGraphSource === item.category}
          onClick={(category) => setCurrentGraphSource(category)}
          key={item.category}
        />
      ))}
    </ul>
  );
};

export default ChangeGraphSource;
