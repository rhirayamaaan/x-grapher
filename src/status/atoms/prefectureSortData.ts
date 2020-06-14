import { atomFamily, selectorFamily, useRecoilValue } from 'recoil';
import { JapanMeteorologicalAgency, Prefectures } from '~/data';
import TimeUtilities from '~/utilities/time';
import { currentDateState } from './currentDate';
import { currentSortSourceState, CurrentSortSourceConstants } from './currentSortSource';

export const prefectureSortDataState = atomFamily({
  key: 'prefectureSortData',
  default: selectorFamily({
    key: 'prefectureSortData',
    get: (code: Prefectures.Constants.Codes) => async ({ get }) => {
      const currentDate = TimeUtilities.parseISOYYYYMMDDString(get(currentDateState));
      const currentSortSource = get(currentSortSourceState);

      const name = Prefectures.Constants.PrefecturalSeats[code];
      let value;
      let direction;

      if (currentSortSource === CurrentSortSourceConstants.Types.DEFAULT) {
        return { name, value, direction };
      }

      const jsons = await JapanMeteorologicalAgency.getJsons();

      value = jsons[currentSortSource][currentDate][code].value;
      direction = jsons[currentSortSource][currentDate][code].direction;

      return {
        name,
        value,
        direction,
      };
    },
  }),
});
