import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '~/status/atoms/currentDate';
import { currentSortSourceState } from '~/status/atoms/currentSortSource';
import TimeUtilities from '~/utilities/time';
import DateCarousel from '~/components/modules/DateCarousel';
import GraphTable from '~/components/modules/GraphTable';
import ChangeGraphSource from '~/components/modules/ChangeGraphSource';
import { currentGraphSourceState } from '~/status/atoms/currentGraphSource';
import ChangeSortSource from '~/components/modules/ChangeSortSource';
import { tableOrderSortState } from '~/status/atoms/tableOrder';

const Top = () => {
  const currentDate = useRecoilValue(currentDateState);
  const currentGraphSource = useRecoilValue(currentGraphSourceState);
  const currentSortSource = useRecoilValue(currentSortSourceState);
  const tableOrderSort = useRecoilValue(tableOrderSortState);
  return (
    <div>
      <p>currentDate: {TimeUtilities.parseJaYYYYMMDDString(currentDate)}</p>
      <p>currentGraphSource: {currentGraphSource}</p>
      <p>currentSortSource: {currentSortSource}</p>
      <p>tableOrderSort: {tableOrderSort}</p>
      <DateCarousel />
      <ChangeSortSource />
      <ChangeGraphSource />
      <GraphTable />
    </div>
  );
};

export default Top;
