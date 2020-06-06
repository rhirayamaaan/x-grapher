import { atom, selector } from 'recoil';
import { Prefectures, JapanMeteorologicalAgency } from '~/data';
import { currentSortSourceState } from './currentSortSource';
import { currentDateState } from './currentDate';
import TimeUtilities from '~/utilities/time';

export enum TableSortOrderTypes {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export const tableOrderSortState = atom({
  key: 'tableOrderSortState',
  default: TableSortOrderTypes.ASCENDING,
});

export const tableOrderState = selector({
  key: 'tableOrder',
  get: ({ get }) => {
    const currentSortSource = get(currentSortSourceState);
    const currentDate = get(currentDateState);
    const tableOrderSort = get(tableOrderSortState);
    const data = JapanMeteorologicalAgency.Jsons[currentSortSource][TimeUtilities.parseISOYYYYMMDDString(currentDate)];

    return Object.keys(data).sort((a, b) => {
      if (data[a].value < data[b].value) {
        return tableOrderSort === TableSortOrderTypes.ASCENDING ? -1 : 1;
      } else if (data[a].value > data[b].value) {
        return tableOrderSort === TableSortOrderTypes.ASCENDING ? 1 : -1;
      }
      return 0;
    }) as Prefectures.Constants.Codes[];
  },
});
