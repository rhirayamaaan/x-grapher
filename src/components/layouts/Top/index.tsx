import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '~/status/atoms/currentDate';
import TimeUtilities from '~/utilities/time';
import DateCarousel from '~/components/modules/DateCarousel';
import GraphTable from '~/components/modules/GraphTable';
import ChangeGraphSource from '~/components/modules/ChangeGraphSource';
import { currentGraphSourceState } from '~/status/atoms/currentGraphSource';
import ChangeSortSource from '~/components/modules/ChangeSortSource';

const Top = () => {
  const currentDate = useRecoilValue(currentDateState);
  const currentGraphSource = useRecoilValue(currentGraphSourceState);
  return (
    <div>
      <p>currentDate: {TimeUtilities.parseJaYYYYMMDDString(currentDate)}</p>
      <p>currentGraphSource: {currentGraphSource}</p>
      <DateCarousel />
      <ChangeSortSource />
      <ChangeGraphSource />
      <GraphTable />
    </div>
  );
};

export default Top;
