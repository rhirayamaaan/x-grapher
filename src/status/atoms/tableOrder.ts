import { atom, selector } from 'recoil';
import { Prefectures, JapanMeteorologicalAgency } from '~/data';
import { currentSortSourceState } from './currentSortSource';
import { currentDateState } from './currentDate';
import TimeUtilities from '~/utilities/time';

const initalState = () => Prefectures.Constants.codeKeys.map((key) => Prefectures.Constants.Codes[key]);

export namespace TableSortOrderConstants {
  export enum Types {
    ASCENDING = 'ascending',
    DESCENDING = 'descending',
  }

  export const jaNames: { [key in Types]: string } = {
    [Types.ASCENDING]: '昇順',
    [Types.DESCENDING]: '降順',
  };
}

export const tableOrderSortState = atom({
  key: 'tableOrderSortState',
  default: TableSortOrderConstants.Types.ASCENDING,
});

export const tableOrderState = selector({
  key: 'tableOrder',
  get: async ({ get }) => {
    const currentSortSource = get(currentSortSourceState);
    const currentDate = get(currentDateState);
    const tableOrderSort = get(tableOrderSortState);
    const jsons = await JapanMeteorologicalAgency.getJsons();
    const data = jsons[currentSortSource][TimeUtilities.parseISOYYYYMMDDString(currentDate)];

    const sorted = Object.keys(data).sort((a, b) => {
      if (data[a].value < data[b].value) {
        return tableOrderSort === TableSortOrderConstants.Types.ASCENDING ? -1 : 1;
      } else if (data[a].value > data[b].value) {
        return tableOrderSort === TableSortOrderConstants.Types.ASCENDING ? 1 : -1;
      }
      return 0;
    }) as Prefectures.Constants.Codes[];

    return initalState().map((code) => ({
      code,
      index: sorted.findIndex((value) => value === code),
    }));
  },
});
