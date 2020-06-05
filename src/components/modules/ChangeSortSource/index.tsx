import React, { FC, useCallback } from 'react';
import Icon, { IconThemes } from '~/components/parts/Icon';
import { currentSortSoucceState } from '~/status/atoms/currentSortSource';
import { JapanMeteorologicalAgency } from '~/data';
import { useRecoilState } from 'recoil';

const itemsData = [
  {
    category: JapanMeteorologicalAgency.Constants.Categories.HIGHEST_TEMPERATURE,
    icon: IconThemes.CELSIUS,
  },
  {
    category: JapanMeteorologicalAgency.Constants.Categories.LOWEST_TEMPERATURE,
    icon: IconThemes.CELSIUS,
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

interface ChangeSortSourceItemProps {
  category: JapanMeteorologicalAgency.Constants.Categories;
  icon: IconThemes;
  onClick: (category: JapanMeteorologicalAgency.Constants.Categories) => void;
}

const ChangeSortSourceItem: FC<ChangeSortSourceItemProps> = ({ category, icon, onClick }) => {
  const setCategory = useCallback(() => {
    onClick(category);
  }, []);

  return (
    <li>
      <button onClick={setCategory}>
        <Icon theme={icon} />
        {category}
      </button>
    </li>
  );
};

const ChangeSortSource = () => {
  const [currentSortSource, setCurrentSortSource] = useRecoilState(currentSortSoucceState);
  const setCategory = useCallback(
    (category: JapanMeteorologicalAgency.Constants.Categories) => setCurrentSortSource(category),
    []
  );
  return (
    <ul>
      {itemsData.map((item) => (
        <ChangeSortSourceItem {...item} onClick={setCategory} key={item.category} />
      ))}
    </ul>
  );
};

export default ChangeSortSource;
