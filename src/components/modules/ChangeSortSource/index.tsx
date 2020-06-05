import React from 'react';
import Icon, { IconThemes } from '~/components/parts/Icon';

const ChangeSortSource = () => {
  return (
    <div>
      <Icon theme={IconThemes.CELSIUS} />
      <Icon theme={IconThemes.SUN} />
      <Icon theme={IconThemes.RAIN} />
      <Icon theme={IconThemes.WIND} />
    </div>
  );
};

export default ChangeSortSource;
