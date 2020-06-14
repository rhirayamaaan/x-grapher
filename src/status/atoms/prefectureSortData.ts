import { atomFamily, selectorFamily, useRecoilValue } from 'recoil';
import { JapanMeteorologicalAgency, Prefectures } from '~/data';
import TimeUtilities from '~/utilities/time';
import { currentDateState } from './currentDate';
import { currentSortSourceState } from './currentSortSource';

export const prefectureSortDataState = atomFamily({
  key: 'prefectureSortData',
  default: selectorFamily({
    key: 'prefectureSortData',
    get: (code: Prefectures.Constants.Codes) => async ({ get }) => {
      const currentDate = TimeUtilities.parseISOYYYYMMDDString(get(currentDateState));
      const currentSortSource = get(currentSortSourceState);
      const jsons = await JapanMeteorologicalAgency.getJsons();

      return {
        name: Prefectures.Constants.PrefecturalSeats[code],
        ...jsons[currentSortSource][currentDate][code],
        currentSortSource,
      };
    },
  }),
});
