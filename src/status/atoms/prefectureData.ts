import { atom, selector, useRecoilValue } from 'recoil';
import { Covid19CommunityMobilityReports, Prefectures } from '~/data';
import TimeUtilities from '~/utilities/time';
import { currentDateState } from './currentDate';
import { currentGraphSourceState } from './currentGraphSource';

const getCovid19CommunityMobilityReportsData = (code: Prefectures.Constants.Codes) => {
  const currentDate = useRecoilValue(currentDateState);

  return Covid19CommunityMobilityReports.Json[code].filter(
    (row) => row.date === TimeUtilities.parseISOYYYYMMDDString(currentDate)
  )[0];
};

export const prefectureDataState = (code: Prefectures.Constants.Codes) =>
  atom({
    key: `prefectureData-${code}`,
    default: {
      name: Prefectures.Constants.Names[code].ja,
      ...getCovid19CommunityMobilityReportsData(code),
    },
  });

export const selectedPrefectureDataState = (code: Prefectures.Constants.Codes) =>
  selector({
    key: `selectedPrefecuterData-${code}`,
    get: ({ get }) => {
      const data = get(prefectureDataState(code));
      const currentGraphSource = get(currentGraphSourceState);
      return {
        name: data.name,
        value: data[currentGraphSource],
      };
    },
  });
